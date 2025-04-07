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
    <div className="h-full flex flex-col justify-between">
      <LocalizedClientLink
        href={`/products/${productPreview.handle}`}
        className="group h-full w-full flex flex-col items-center"
      >
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="relative z-10 flex flex-col mb-2 mt-2 items-end grow w-full">
          <Text
            className={`text-black text-lg text-left ${tilt_warp.className} line-clamp-2 min-h-[3rem]`}
          >
            {productPreview.title}
          </Text>
          <div className="flex text-ui-fg-base justify-end mt-1">
            <ProductPrice
              product={pricedProduct}
              variant={pricedProduct.variants[0]}
              region={region}
            />
          </div>
          <div className="grow"></div>
        </div>
      </LocalizedClientLink>

      <Suspense
        fallback={
          <CustomProductActions product={pricedProduct} region={region} />
        }
      >
        <CustomProductActionsWrapper id={productPreview.id} region={region} />
      </Suspense>
    </div>
  )
}
