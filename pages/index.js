/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({ content }) => {

   const [state, setState] = React.useState(null)
   // will not run in server
   React.useEffect(() => {
      console.log('Wasssss')
      setState(true)
   }, [])

   return (
      <div sx={{ height: `calc(100vh - 60px)` }}>
         <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
            <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
            <p>{state ? 'From Client' : 'From Server'}</p>
         </div>
      </div>
   )
}

export function getStaticProps() {
   return {
      props: {
         content: {
            title: 'Look at my note app tho'
         }
      }
   }
}

