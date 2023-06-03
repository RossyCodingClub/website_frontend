import { Dropdown, Navbar as Nav, Text, Avatar, Input,  } from '@nextui-org/react'
import NavbarBrand from '@nextui-org/react/types/navbar/navbar-brand'
import NavbarItem from '@nextui-org/react/types/navbar/navbar-item'
//! Nav is from the component, such that the component can be imported as "Navbar"
function Navbar() {
    //TODO change if nav should be compact for certain size (isCompact attribute can be set directly into nav, so use a media query)
    //TODO make it so that if view is XS (where components are hidden) it will show the hamburger menu
//TODO, if logged in show avatar, otherwise login button/screen
    


return <Nav isBordered variant="sticky"  >
        <Nav.Brand css={{ mr: "$4" }}>
          {/* <AcmeLogo /> */}
      
          <Text b color="inherit" css={{ mr: "$11" }}>
            Somelogo
          </Text>
          
          <Nav.Content  variant="highlight" hideIn={'xs' || 'sm'}>
            <Nav.Link isActive href="#" >
              Dashboard
            </Nav.Link>
            <Nav.Link href="#" >Who We Are</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
           
          </Nav.Content>
        </Nav.Brand>
        
        <Nav.Content 
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Nav.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
           
          >
            <Input
              clearable
            //   contentLeft={
            //     // <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            //   }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Nav.Item>
          <Dropdown placement="bottom-right" >
            <Nav.Item hideIn={'xs' || 'sm'}>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Nav.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          <Nav.Toggle showIn={'xs'}>

          </Nav.Toggle>
          <Nav.Collapse>
            <Nav.CollapseItem>Dashboard</Nav.CollapseItem>
            <Nav.CollapseItem>Who we are</Nav.CollapseItem>
            <Nav.CollapseItem>Portfolio</Nav.CollapseItem>
            <Nav.CollapseItem>Team Settings</Nav.CollapseItem>
            <Nav.CollapseItem>Help & Feedback</Nav.CollapseItem>
            <Nav.CollapseItem>Settings</Nav.CollapseItem>
          </Nav.Collapse>
        </Nav.Content>
</Nav>
}

export default Navbar