export async function sku(ctx: Context, next: () => Promise<any>) {
  const {
    state: { skuId },
    clients: { catalog },
  } = ctx

  ctx.body = await catalog.getSkuById(skuId.toString())

  await next()
}
