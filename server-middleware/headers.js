export default function (req, res, next) {
  res.setHeader(
    'Cache-Control',
    'public, max-age=300, s-maxage=1000, stale-while-revalidate'
  )
  next()
}
