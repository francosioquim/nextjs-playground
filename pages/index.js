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
    const cowLinks = cowRoutes ?
    Object.keys(cowRoutes)
      // clean up array before mapping
      .filter((slug) => slug && slug !==  '/' && idx(cowRoutes[slug], _ => _.query.title))
      // sort by titles
      .sort((slugA, slugB) => idx(cowRoutes[slugA], _ => _.query.title) < idx(cowRoutes[slugB], _ => _.query.title) ? -1 : 1)
      // create <PostLink /> components for each slug
      .map((slug) => {
        const title = idx(cowRoutes[slug], _ => _.query.title)
        return <PostLink title={title} key={slug} />
      }) : 
    null
    
    return (
    <div>
        <h1>{`Generated ${routes.routeCount} cow messages`}</h1>
        <ul>
            {cowLinks}
        </ul>
    </div>
    )

}
