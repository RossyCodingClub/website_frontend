import Navbar from "../Components/Navbar"
import { Text, Button, Image } from '@nextui-org/react'

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
    </>
  );
}

export default LandingScreen;
