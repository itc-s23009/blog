const handler = async (req, res) => {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ messeage: 'Innvalid token' })
  }
  try {
    await res.unstable_revalidate('/blog/shedule')
    await res.unstable_revalidate('/blog/music')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
export default handler
