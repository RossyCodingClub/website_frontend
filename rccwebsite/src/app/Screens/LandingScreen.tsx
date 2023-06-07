import IconHeadingText from "../Components/Icon-Heading-Text";
import Navbar from "../Components/Navbar"
import { Text, Button, Image, Grid } from '@nextui-org/react'

function LandingScreen() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Text>The value you provide</Text>
          <Text size={'$base'}>Subline further explaining value we provide</Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button>Buy now/Call to action</Button>
            <Text size={'small'}>Super small extra description/example of value provided</Text>
          </div>
        </div>
        <div>
          <Image src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg" width={500} />
        </div>
     </div>
      {
        
        //features and benefits,
        ///3 little small 'description,header icons
        //header with dotpoints (image right)
        //image left (header with description and dotpoints again)
        // 3 little paragraphs or reviews/testimonals with accounts/users
        //handle objections and FAQ's with dropdown cards
        //Final call to action
        //footer (should be its own component that doesnt seem to change)
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        <IconHeadingText headerContent="Random header1" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <IconHeadingText headerContent="Random header2" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <IconHeadingText headerContent="Random header3" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <IconHeadingText headerContent="Random header4" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <IconHeadingText headerContent="Random header5" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <IconHeadingText headerContent="Random header6" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
      </div>
      }
    </>
  );
}

export default LandingScreen;
