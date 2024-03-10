import React from "react"
import Card from '../components/Card/index'

export default function CardView() {
    return (
        <section id="cards">
            <h2>Card</h2>
            <p>A card component with a default icon, and a hover effect. Using a color is optional.</p>
            <Card>
                <Card.Icon icon=""/>
                <Card.Title>Easy Deployment</Card.Title>
                <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
            </Card>
        </section>
    )
}

{/* <Card 
icon="" 
color="" 
title="Easy Deployment" 
text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." 
/>
<Card 
icon="" 
color="blue" 
title="Easy Deployment"
text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
/> */}