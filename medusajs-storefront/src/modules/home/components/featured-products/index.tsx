import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return collections.map((collection) => {
    if (collection.products.length > 0) {
      return (
        <li key={collection.id}>
          <ProductRail collection={collection} region={region} />
        </li>
      )
    }
    return null
  })
}
