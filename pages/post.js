import Cowsay from 'react-cowsay'
import {withRouter} from 'next/router'

const Page = withRouter((props) => (
    <Cowsay>{props.router.query.title}</Cowsay>
))

export default Page