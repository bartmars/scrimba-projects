import React from "react"
import BadgeView from './views/BadgeView.jsx'
import BannerView from './views/BannerView.jsx'
import CardView from './views/CardView'
import TestimonialView from './views/TestimonialView'
import ToastView from './views/ToastView'
import TooltipView from './views/TooltipView'

function App() {
  return (
    <main className='container'>
      <BadgeView />
      <BannerView />
      <CardView />
      <TestimonialView />
      <ToastView />
      <TooltipView />
    </main>
  )
}

export default App
