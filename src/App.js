import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { TextField, IconButton } from "@material-ui/core";

import { SearchOutlined } from "@material-ui/icons";

export default class CategoriesResults extends React.Component {
  render() {
    const docs = data.documents;

    return (
      <div>
        <List component="nav" aria-labelledby="nested-list-subheader">
          {docs.map((doc) => {
            return <CustomizedListItem key={doc.id} doc={doc} />;
          })}
        </List>
      </div>
    );
  }
}

class CustomizedListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Handle Clicked....");
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  render() {
    const { doc } = this.props;
    return (
      <div>
        <ListItem button key={doc.Id} onClick={this.handleClick}>
          <ListItemText primary={doc.Name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          key={doc.Sheets.Id}
          in={this.state.open}
          timeout="auto"
          unmountOnExit
        >
          <TextField
            fullWidth
            id="standard-bare"
            variant="outlined"
            defaultValue="Search..."
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />

          <List component="li" disablePadding key={doc.Id}>
            {doc.Sheets.map((sheet) => {
              return (
                <FormGroup button key={sheet.Id}>
                  <FormControlLabel
                    key={sheet.Id}
                    primary={sheet.Title}
                    control={<Checkbox />}
                    label={`${sheet.firstName} ${sheet.lastName}`}
                  />
                </FormGroup>
              );
            })}
          </List>
        </Collapse>
        <Divider />
      </div>
    );
  }
}

const data = {
  documents: [
    {
      Id: 1,
      Name: "Lead Owner",
      Sheets: [
        {
          id: "5917a82a-d1c6-4036-bf4d-a9632b0f42f4",
          firstName: "Loydie",
          lastName: "McClean",
          avatar: "https://robohash.org/inquaefuga.png?size=50x50&set=set1",
        },
        {
          id: "9d9bbc20-5d66-4508-9d60-31f56cd8549c",
          firstName: "Magnum",
          lastName: "Darko",
          avatar: "https://robohash.org/quasiidab.png?size=50x50&set=set1",
        },
        {
          id: "2cb12a28-1125-45ad-b1a1-8ec0dd3ab460",
          firstName: "Shirl",
          lastName: "Gateman",
          avatar:
            "https://robohash.org/nostrumaniminisi.png?size=50x50&set=set1",
        },
        {
          id: "0c8ef7bf-58bb-4ff2-827f-14423c6763ec",
          firstName: "Dyana",
          lastName: "MacFadzan",
          avatar: "https://robohash.org/sequifugaet.png?size=50x50&set=set1",
        },
        {
          id: "8e826c30-e6e0-4b3a-af6a-ecbe435a254f",
          firstName: "Pren",
          lastName: "Chanders",
          avatar:
            "https://robohash.org/voluptastemporain.png?size=50x50&set=set1",
        },
        {
          id: "09e3d411-8f79-49b1-9e11-45361c9df347",
          firstName: "Talya",
          lastName: "Driffill",
          avatar:
            "https://robohash.org/sintdignissimosdolorem.png?size=50x50&set=set1",
        },
        {
          id: "d6332234-6dc9-45df-b689-9d555a4fd69d",
          firstName: "Kim",
          lastName: "Sink",
          avatar:
            "https://robohash.org/eumanimiadipisci.png?size=50x50&set=set1",
        },
        {
          id: "e0f87edb-c533-4839-aca1-fe0203dc41d0",
          firstName: "Suzy",
          lastName: "Sallter",
          avatar:
            "https://robohash.org/voluptasmaiorestemporibus.png?size=50x50&set=set1",
        },
        {
          id: "cd452be0-5112-4600-9ce9-c33a04fd1b17",
          firstName: "Aland",
          lastName: "Badwick",
          avatar:
            "https://robohash.org/nihilvoluptasnulla.png?size=50x50&set=set1",
        },
        {
          id: "b4052fd1-c925-4a72-99d5-c957c3638633",
          firstName: "Lyssa",
          lastName: "Brundale",
          avatar:
            "https://robohash.org/eaquerationemolestiae.png?size=50x50&set=set1",
        },
        {
          id: "f3f7a409-25eb-4b5a-84bf-31f7ec99bfac",
          firstName: "Fabian",
          lastName: "Illesley",
          avatar: "https://robohash.org/hicsuntqui.png?size=50x50&set=set1",
        },
        {
          id: "ce60426b-aa27-4965-8fc0-6fabaa01a5e5",
          firstName: "Joelly",
          lastName: "Cox",
          avatar:
            "https://robohash.org/enimfugiatdolorem.png?size=50x50&set=set1",
        },
        {
          id: "9f9b8f00-b891-49a8-9da5-e294e8db1ddd",
          firstName: "Boycie",
          lastName: "Soot",
          avatar:
            "https://robohash.org/facilisadolorum.png?size=50x50&set=set1",
        },
        {
          id: "2983f1b9-d519-4745-9952-bc29e81b2aae",
          firstName: "Frank",
          lastName: "Sporgeon",
          avatar:
            "https://robohash.org/facereconsecteturquos.png?size=50x50&set=set1",
        },
        {
          id: "7f26aa9e-6dae-482c-bc05-8ab53bbfd53f",
          firstName: "Johnnie",
          lastName: "Skippon",
          avatar:
            "https://robohash.org/voluptatesaperiamquam.png?size=50x50&set=set1",
        },
        {
          id: "b7a3b04d-2dfd-4022-aa26-9bced15f9eb7",
          firstName: "Virginie",
          lastName: "Arnopp",
          avatar:
            "https://robohash.org/blanditiisoccaecatiqui.png?size=50x50&set=set1",
        },
        {
          id: "874db08e-e86b-4504-a9d8-64b433e8222e",
          firstName: "Claudianus",
          lastName: "McEnhill",
          avatar: "https://robohash.org/quisednesciunt.png?size=50x50&set=set1",
        },
        {
          id: "18061692-95a2-4f24-9405-668e15a30b3e",
          firstName: "Isabella",
          lastName: "Conneely",
          avatar:
            "https://robohash.org/quismolestiaesit.png?size=50x50&set=set1",
        },
        {
          id: "09cc5e0b-3670-43bd-b24f-9299cf0d662a",
          firstName: "Gino",
          lastName: "Elis",
          avatar: "https://robohash.org/doloremideum.png?size=50x50&set=set1",
        },
        {
          id: "ff3a4912-1758-44b2-ad08-e481a6ed7c3c",
          firstName: "Dania",
          lastName: "Kalf",
          avatar:
            "https://robohash.org/totamomnisaccusantium.png?size=50x50&set=set1",
        },
      ],
    },
    {
      Id: 1,
      Name: "Lead Source",
      Sheets: [
        {
          id: "67c4fd9e-a288-4a71-ae74-e577ae21424c",
          firstName: "Youtube",
          lastName: "",
        },
        {
          id: "5e104a58-3aa4-4c56-896c-239791cfc610",
          firstName: "Google",
          lastName: "",
        },
        {
          id: "250a80f1-16a9-46d2-bfbc-20b2b2ee4b5b",
          firstName: "Facebook",
          lastName: "",
        },
        {
          id: "bba517e2-e1cd-47d8-bd67-161718894f81",
          firstName: "Twitter",
          lastName: "",
        },
        {
          id: "5f7e8e19-e829-416a-8f93-b30479999aec",
          firstName: "Phone Calls",
          lastName: "",
        },
        {
          id: "d500a211-20f5-4e7f-824f-2aedc443739a",
          firstName: "Ozontel",
          lastName: "",
        },
        {
          id: "bf353ec2-18d4-438b-b7ca-300034c3e9a6",
          firstName: "Chatterbridge",
          lastName: "",
        },
        {
          id: "ce0a646b-8727-4950-a47c-d5b5902509e6",
          firstName: "Browsebug",
          lastName: "",
        },
        {
          id: "2aa7519b-0a24-4b3b-a7b2-f63010aebc4e",
          firstName: "Babbleblab",
          lastName: "",
        },
        {
          id: "c13d8772-76da-4ddb-b695-fd6899698bc9",
          firstName: "Roodel",
          lastName: "",
        },
        {
          id: "eaae735e-9363-48bd-9cf4-00dd675fad74",
          firstName: "Yombu",
          lastName: "",
        },
        {
          id: "289c857c-c050-496e-88ac-6d883d9b6341",
          firstName: "Browsetype",
          lastName: "",
        },
        {
          id: "e69ac0ab-477f-4ded-9bf0-9b65e3c28f11",
          firstName: "Yata",
          lastName: "",
        },
        {
          id: "d35a8590-4655-420d-9ec5-434cad441d6b",
          firstName: "Devshare",
          lastName: "",
        },
        {
          id: "4ee492a1-2d06-40c3-9f91-42be32313440",
          firstName: "Buzzster",
          lastName: "",
        },
        {
          id: "727bb5d7-89fa-4ad9-8e8a-fdcb4081ccea",
          firstName: "Youspan",
          lastName: "",
        },
        {
          id: "05ff66f3-b60c-43da-af35-b49423495c65",
          firstName: "Ozu",
          lastName: "",
        },
        {
          id: "1ae882db-7c8d-4a87-b7c7-1904df34f748",
          firstName: "Cogibox",
          lastName: "",
        },
        {
          id: "ebe148dc-d3b2-4ca9-bb8d-27c6145ae9e0",
          firstName: "Omba",
          lastName: "",
        },
        {
          id: "65a641c7-5ce9-419b-b309-1c6ade12a319",
          firstName: "Realbridge",
          lastName: "",
        },
      ],
    },
    {
      Id: 1,
      Name: "Stage",
      Sheets: [
        {
          id: "0d0c28cf-435f-4379-9615-a919c09389df",
          firstName: "Fresh call",
          lastName: "",
        },
        {
          id: "db5b9f49-7ec8-4663-b62d-fe3889ef1fa2",
          firstName: "Reminder",
          lastName: "",
        },
        {
          id: "2eeb8ca7-31f8-42bf-986d-a54a24853c0d",
          firstName: "Closed won",
          lastName: "",
        },
        {
          id: "26fee6e1-2570-4aa2-b2e8-57bbe49dffea",
          firstName: "Closed lost",
          lastName: "",
        },
        {
          id: "225c20de-9bb3-4ac9-80f5-6dd2aa779bd1",
          firstName: "In Process",
          lastName: "",
        },
        {
          id: "c93e342a-dfb3-4587-b388-b8462d6ab8d2",
          firstName: "Prospect",
          lastName: "",
        },
        {
          id: "fe209778-87af-4b98-a49a-ecc75ae38f71",
          firstName: "Suspect",
          lastName: "",
        },
        {
          id: "7af4cecd-873d-4418-a50b-f72ac121912b",
          firstName: "Customer",
          lastName: "",
        },
        {
          id: "717d08a2-e008-4d37-9f7b-4dc9f03ff540",
          firstName: "Bitwolf",
          lastName: "",
        },
        {
          id: "62946cd1-b56c-4982-9de2-694e3a445148",
          firstName: "Kanlam",
          lastName: "",
        },
        {
          id: "fcb75e85-49e1-4fed-b243-f36c9486cfe3",
          firstName: "Regrant",
          lastName: "",
        },
        {
          id: "8e624bca-2b05-4ed2-8cde-2f0e270242cc",
          firstName: "Sub-Ex",
          lastName: "",
        },
        {
          id: "9fbf9022-d794-4bd7-bd51-7352f54fa531",
          firstName: "Treeflex",
          lastName: "",
        },
        {
          id: "5facf67c-8262-470b-a23b-4b47b5ba8d3a",
          firstName: "Wrapsafe",
          lastName: "",
        },
        {
          id: "7b32c297-d0d4-4121-9105-64ffc0f2fbe2",
          firstName: "Transcof",
          lastName: "",
        },
        {
          id: "191f1155-2144-470a-992e-340834aef08e",
          firstName: "Namfix",
          lastName: "",
        },
        {
          id: "a2b9f867-9604-42b3-86cb-f59f3c20353a",
          firstName: "Matsoft",
          lastName: "",
        },
        {
          id: "e4eb5de5-3c90-41c6-84c5-967dec9e7466",
          firstName: "Opela",
          lastName: "",
        },
        {
          id: "0d628e6e-701b-4dc1-8b52-ea0f89de7f9b",
          firstName: "Flexidy",
          lastName: "",
        },
        {
          id: "bdd20d0f-d79e-4ef9-bfc7-15af5fbad120",
          firstName: "Matsoft",
          lastName: "",
        },
      ],
    },
  ],
};
