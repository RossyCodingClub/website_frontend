import Navbar from "../Components/Navbar"
import {Grid, Card, Text, Collapse, Image, Col}  from '@nextui-org/react'




function DashboardScreen() {
    //TODO 3 potential cards on what we do image gallery drop down etc

    //TODO headline (in nice text) + IMAGE background instead

    //TODO text with dotpoints etc 
    //Todo call to action/add email (apply now, get a quote)

    return (
        <>
            <Navbar></Navbar>
            {/* <img src="../../../public/Assets/6c265cb9-e4c5-4efc-8cf5-d0afae6a4dd8.jpg" style={{boxSizing: 'content-box'}} width={'100'} alt="cringe"></img> */}
            <Text>
                GALLERY GOES HERE
            </Text>
            <Grid.Container gap={2}>
      <Grid xs={4}>
        <Card>
          <Card.Body>
            <Text>Default card. (shadow)</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="flat">
          <Card.Body>
            <Text>Flat card.</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Text>Bordered card.</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>



{
    //! random garb
}
<Grid.Container gap={2}>
      <Grid>
        <Collapse.Group shadow>
          <Collapse title="Anchor" 
        //   arrowIcon={<AnchorIcon />}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Moon" 
        //   arrowIcon={<MoonIcon />}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Sun" 
        //   arrowIcon={<SunIcon />}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
      <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-4.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
      </Grid>
      <Grid xs={12} sm={4}>
      <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-5.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
      </Grid>
      <Grid xs={12} sm={4}>
      <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-2.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
      </Grid>
      <Grid xs={12} sm={5}>
      <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-6.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
      </Grid>
      <Grid xs={12} sm={7}>
      <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-5.jpeg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
      </Grid>
    </Grid.Container>


        </>
            
        
    )
}

export default DashboardScreen