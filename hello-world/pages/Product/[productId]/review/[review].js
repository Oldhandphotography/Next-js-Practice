import {useRouter}from 'next/router'
function Review(){
const router =useRouter()
const {productId,review} = router.query
return <div>
  {/* [ ]around file name create a dynamic route for web pages in next.js */}
  <h1>review {review} about product{productId}</h1>
</div>;
}
export default Review