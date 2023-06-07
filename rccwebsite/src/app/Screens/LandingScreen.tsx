import IconHeadingText from "../Components/Icon-Heading-Text";
import Navbar from "../Components/Navbar"
import { Text, Button, Image, Grid, User, Collapse, Link, useTheme } from '@nextui-org/react'

function LandingScreen() {
    const { theme } = useTheme();
    //TODO make a testimony widget/card
  return (
    <>
    
      <Navbar></Navbar>
      <div style={{padding: "2rem"}}>
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
        <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        <IconHeadingText headerContent="Random header1" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <IconHeadingText headerContent="Random header2" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <IconHeadingText headerContent="Random header3" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
       </div>
       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        <IconHeadingText headerContent="Random header1" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        <Image src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg" width={500} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        <Image src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg" width={500} />
        <IconHeadingText headerContent="Random header1" textContent="random text" icon={<img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg"></img>} />
        </div>
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        {//Testimonials
        }
        <div>
            <Text >
                "Bro I did this thing nad it was so good 10/10 rcc is best 100% guaranteed best ever best"
            </Text>
            <User
            bordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            color="primary"
          />
        </div>
        <div>
        <Text >
                "Bro I did this thing nad it was so good 10/10 rcc is best 100% guaranteed best ever best"
            </Text>
            <User
            bordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            color="primary"
          />
        </div>
        <div>
        <Text >
                "Bro I did this thing nad it was so good 10/10 rcc is best 100% guaranteed best ever best"
            </Text>
            <User
            bordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            color="primary"
          />
        </div>
        </div>
        <div>
<Text h2>Some headline FAQ whatever</Text>
        <Text>
            Random description of the garbage
        </Text>
        <Collapse.Group>
      <Collapse title="Option A">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <Collapse title="Option B">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <Collapse title="Option C">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
    </Collapse.Group>
    </div>

<Link>RCC</Link>
<Text h3>
    If ur feeling low give us a go
</Text>

<Button color="success">
    Buy our shit
</Button>
        {
      
            // call to action
            //footer
        }
        </>

      }
      </div>
    </>
  );
}

export default LandingScreen;
