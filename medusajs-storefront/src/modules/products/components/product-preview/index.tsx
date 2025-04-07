import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { tilt_warp } from "app/fonts"
import { Suspense } from "react"

import ProductActionsWrapper from "@modules/products/templates/product-actions-wrapper"
import CustomProductActions from "components/ui/CustomProductActions"
import CustomProductActionsWrapper from "components/ui/custom-product-actions-wrapper"
import ProductPrice from "../product-price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div className="h-full flex flex-col items-center justify-between">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="relative z-10 flex flex-col">
          <div className="flex flex-col mb-2 mt-2">
            <Text className={`text-black text-lg ${tilt_warp.className}`}>
              {productPreview.title}
            </Text>
            <ProductPrice
              product={pricedProduct}
              variant={pricedProduct.variants[0]}
              region={region}
            />
          </div>
          <Suspense
            fallback={
              <CustomProductActions product={pricedProduct} region={region} />
            }
          >
            <CustomProductActionsWrapper
              id={productPreview.id}
              region={region}
            />
          </Suspense>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
