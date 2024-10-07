import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"
import { dm_sans, tilt_warp } from "app/fonts"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through text-ui-fg-muted">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx(`text-black `, {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
      >
        {price.calculated_price}
      </Text>
    </>
  )
}
