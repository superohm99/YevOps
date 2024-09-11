import React from 'react'
import NavbarShop from '@/components/NavbarShop'
import ShopSidebar from '@/components/ShopSidebarProfile'
import ShopReview from '@/components/ShopReview'

const ShopProfileReviewHistoryPage = () => {
  return (
    <div>
        <NavbarShop/>
        <div className='flex pl-5 pt-5'>
            <ShopSidebar/>
            <ShopReview/>
        </div>
    </div>
  )
}

export default ShopProfileReviewHistoryPage
