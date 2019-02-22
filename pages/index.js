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
    const cowRoutes = routes.getRoutes()
    const cowLinks = Object.keys(cowRoutes).map((slug) => {
      if (slug) {
        const title = idx(cowRoutes[slug], _ => _.query.title)
        return <PostLink title={title} key={slug} />
      }
      return null
    })
    
    return (
    <div>
        <h1>{`There are ${routes.routeCount} cows below`}</h1>
        <ul>
            {cowLinks}
        </ul>
    </div>
    )

}
