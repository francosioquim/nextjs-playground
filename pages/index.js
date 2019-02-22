import Link from 'next/link'
import idx from 'idx'
import routes from '../routes'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => {
    const cowRoutes = process.env.routes
    const cowLinks = cowRoutes ? Object.keys(cowRoutes).map((slug) => {
      if (slug && slug !== '/') {
        const title = idx(cowRoutes[slug], _ => _.query.title)
        return <PostLink title={title} key={slug} />
      }
      return null
    }) : null
    
    return (
    <div>
        <h1>{`Generated ${routes.routeCount} cow messages`}</h1>
        <ul>
            {cowLinks}
        </ul>
    </div>
    )

}
