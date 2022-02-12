import {useRouter} from 'next/router'
// params like array unlike like id's like string
 function Docs(){   
    const router = useRouter()
    const{params =[]} = router.query
    console.log(params)
    if(params.length ===2){ return (<h1>viewing docs for feature {params[0]} and concept {params[1]}
    </h1>
    )
         }   
           else if(params.length ===1){ return <h1>viewing docs for features{params[0]}</h1>}

    return <h1>docs home page</h1>
}
export default Docs