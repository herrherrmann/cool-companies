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
  const companiesWithLogos = companies.map((company) =>
    resolveCompanyFields(company, json.includes),
  )
  return companiesWithLogos
}

function resolveCompanyFields(company, includes) {
  const resolvedCompany = { ...company }
  const logoFields = company.fields.logo
  if (logoFields) {
    const logoId = logoFields.sys.id
    resolvedCompany.fields.logoSrc = getAssetUrl(logoId, includes.Asset)
  }
  resolvedCompany.fields.tags = resolveEntryFields(
    company.fields.tags,
    includes,
  )
  resolvedCompany.fields.locations = resolveEntryFields(
    company.fields.locations,
    includes,
  )
  return resolvedCompany
}

function getAssetUrl(assetId, assets) {
  const asset = assets.find((asset) => asset.sys.id === assetId)
  if (!asset) {
    return null
  }
  const fileUrl = asset.fields.file.url
  return `https:${fileUrl}`
}

function resolveEntryFields(nestedEntries, includes) {
  return nestedEntries.map((entry) => {
    const id = entry.sys.id
    const matchingEntry = includes.Entry.find((entry) => entry.sys.id === id)
    const matchingEntryFields = matchingEntry ? matchingEntry.fields : null
    return matchingEntryFields
  })
}

export function getImageUrl(url, width, height, format = 'jpg') {
  return `${url}?fm=${format}&w=${width}&h=${height}`
}
