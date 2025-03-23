export interface ServicesPageData {
  heroTitle: {
    line1: string
    line2: string
  }
  heroDescription: string
  servicesGroup: ServiceBlock[][]
  processTitle: string
  processDescription: string
  processLinkLabel: string
  processLinkUrl: string
}

export interface ServiceBlock {
  name: string
  description: string
  mediaSrc: string
  altText: string
  isVideo: boolean
}
