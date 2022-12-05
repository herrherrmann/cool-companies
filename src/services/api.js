const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}`
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

export async function getCompanies() {
  const searchParams = new URLSearchParams({
    access_token: accessToken,
    content_type: 'company',
    include: '2',
    order: 'fields.name',
  })
  const response = await fetch(`${apiUrl}/entries?${searchParams.toString()}`)
  const json = await response.json()
  const companies = json.items
  const companiesWithLogos = companies.map((company) => {
    const logoFields = company.fields.logo
    if (logoFields) {
      const logoId = logoFields.sys.id
      company.fields.logoSrc = getAssetUrl(json.includes.Asset, logoId)
    }
    return company
  })
  return companiesWithLogos
}

function getAssetUrl(assets, assetId) {
  const asset = assets.find((asset) => asset.sys.id === assetId) || null
  const fileUrl = asset.fields.file.url
  return fileUrl ? `https:${fileUrl}` : null
}

export function getImageUrl(url, width, height, format = 'jpg') {
  return `${url}?fm=${format}&w=${width}&h=${height}`
}
