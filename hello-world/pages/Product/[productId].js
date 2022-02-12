import {useRouter}from 'next/router'

export default function productId() {
    const router =useRouter()
    const productId = router.query.productId
  return <div>
      {/* [ ]around file name create a dynamic route for web pages in next.js */}
      <h1>details about product{productId}</h1>
  </div>;
}
