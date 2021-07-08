import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import EditIcon from "@material-ui/icons/Edit";
import BallotIcon from "@material-ui/icons/Ballot";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer
      anchor="bottom"
      onClose={() => setOpenDrawer(false)}
      open={openDrawer}
    >
      <List>
        <Link to="/">
          <ListItem divider button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>PokeHome</ListItemText>
          </ListItem>
        </Link>
        <Link to="/new">
          <ListItem divider button>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText>PokeCreate</ListItemText>
          </ListItem>
        </Link>
        <Link to="/search">
          <ListItem divider button>
            <ListItemIcon>
              <BallotIcon />
            </ListItemIcon>
            <ListItemText>PokeSearch</ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
