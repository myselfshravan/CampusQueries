import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  DeleteWithConfirmButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  DateInput,
  EmailField,
  BooleanField,
  BooleanInput,
  Form,
  SelectArrayInput,
  SaveButton,
  Title,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  email,
  SelectField,
  ChipField,
  usePermissions,
} from "react-admin";
import { useMediaQuery } from "@mui/material";
import { SimpleList } from "react-admin";
import { RichTextInput, RichTextInputToolbar } from "ra-input-rich-text";
// import { RichTextInput, RichTextInputToolbar } from "ra-richtext-tiptap";
import { Typography, Box, Toolbar } from "@material-ui/core";
import { Grid, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  FirebaseReferenceField,
  FirebaseReferenceInput,
} from "./FirebaseReferenceFields";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// const PostFilter = (props) => (
//   <Filter {...props}>
//     <TextInput label="Search" source="title" alwaysOn />
//   </Filter>
// );

// const ReferenceFilter = (props) => (
//   <Filter {...props}>
//     <ReferenceInput
//       label="Organization"
//       source="user.id"
//       reference="users"
//       allowEmpty
//     >
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//   </Filter>
// );
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // const record = useRecordContext();
  return (
    <>
      <Card sx={{ minWidth: 275, mt: 3, mb: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Campus Queries
          </Typography>
          <Typography variant="h6" component="div">
            Submit Queries
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography> */}
          <Typography variant="body2">If you have an queries</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={{
              pathname: "/problems/create",
            }}
            // state={{ record: { post_id: record.id } }}
          >
            Submit Now
          </Button>
        </CardActions>
      </Card>
      <List {...props} exporter={false}>
        {isSmall ? (
          <>
            <SimpleList
              sx={{
                borderRadius: "0.5rem",
                boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
                divider: "2px",
              }}
              linkType="show"
              primaryText={(record) => <b>{record.title}</b>}
              secondaryText={(record) => `Updated By: ${record.name}`}
            />
          </>
        ) : (
          <div>
            <Card>
              <Datagrid rowClick="show" bulkActionButtons={false}>
                <TextField source="name" />
                <TextField source="title" />
                <ChipField source="status" />
                <ShowButton label="Show" />
                {/* <EditButton label="Edit" /> */}
                {/* <DeleteWithConfirmButton label="Delete" redirect={false} /> */}
              </Datagrid>
            </Card>
          </div>
        )}
      </List>
    </>
  );
};
export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Name" />
      <TextField source="USN" label="USN" />
      <TextField source="title" label="Problem Title" />
      <RichTextField source="body" />
      <TextField source="category" />
      <TextField source="status" />
      <EmailField source="updatedby" />
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="createdate"
      />
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="lastupdate"
      />
    </SimpleShowLayout>
  </Show>
);
const ideaDescription = [required(), minLength(60)];
const USN = [required(), minLength(10)];
const title = [required()];

export const PostCreate = (props) => {
  //assign display name if user is logged in
  if (firebase.auth().currentUser) {
    var name = firebase.auth().currentUser.displayName;
    var email = firebase.auth().currentUser.email;
    //strip the email to get the USN
    email = email.substring(0, email.indexOf("@"));
    console.log(email);
  } else {
    var name = "";
    var email = "1MS";
  }
  return (
    <Create redirect="show" {...props}>
      <SimpleForm>
        <TextInput
          variant="filled"
          label="Name"
          source="name"
          defaultValue={name}
        />
        <TextInput
          label="USN"
          source="USN"
          defaultValue={email}
          validate={USN}
        />
        <Typography sx={{ mt: 2 }}>Choose your problem category</Typography>
        <SelectInput
          source="category"
          choices={[
            { id: "technical", name: "Techinical" },
            { id: "academics", name: "Educational/Academics" },
            { id: "food", name: "Food (Mess/Canteen)" },
            { id: "accomodation", name: "Accomodation" },
            { id: "maintenance", name: "Maintenance" },
            { id: "club", name: "Club Related Issues" },
            { id: "classroom", name: "Classroom Related Issues" },
            { id: "others", name: "Others" },
          ]}
        />
        <TextInput
          multiline
          fullWidth
          label="Problem Title"
          source="title"
          validate={title}
        />
        <Typography sx={{ mt: 1 }}>
          <b>Problem Description:</b>
        </Typography>
        <RichTextInput
          fullWidth
          multiline
          label=""
          source="body"
          validate={ideaDescription}
          helperText="Describe atleast with 60 characters"
        />
        <SelectInput
          title="Status"
          source="status"
          choices={[
            { id: "pending", name: "Pending" },
            { id: "inprogress", name: "In Progress" },
            { id: "resolved", name: "Resolved" },
          ]}
        />
        {/* <ArrayInput label="Links" helperText="Provide links if any" source="urls">
        <SimpleFormIterator>
          <TextInput type="url" source="url" />
        </SimpleFormIterator>
      </ArrayInput> */}
      </SimpleForm>
    </Create>
  );
};
export const PostEdit = (props) => {
  if (firebase.auth().currentUser) {
    var email = firebase.auth().currentUser.email;
    console.log(email);
  } else {
    var email = null;
  }

  return (
    <Edit {...props}>
      <SimpleForm defaultValue={{ role: null }}>
        <TextInput disabled source="name" />
        <TextInput disabled source="title" />
        <TextInput disabled source="USN" />
        <RichTextInput source="body" />
        <TextInput disabled source="category" />
        {email === "admin@admin.com" && (
          <SelectInput
            title="Status"
            source="status"
            choices={[
              { id: "pending", name: "Pending" },
              { id: "inprogress", name: "In Progress" },
              { id: "resolved", name: "Resolved" },
            ]}
          />
        )}
        <Typography>Created Date:</Typography>
        <DateField
          options={{
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }}
          source="lastupdate"
        />
      </SimpleForm>
    </Edit>
  );
};

export const FoundList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  //check if username is admin@admin.com
  // const record = useRecordContext();
  return (
    <>
      <Card sx={{ minWidth: 275, mt: 3, mb: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Campus Queries
          </Typography>
          <Typography variant="h6" component="div">
            Found an item and not sure what to do with it?
          </Typography>
          <Typography variant="body2">
            Help us make college campuses a little bit more organized and a lot
            less stressful by reporting found objects on Campus Queries today.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={{
              pathname: "/found/create",
            }}
            // state={{ record: { post_id: record.id } }}
          >
            Report Now
          </Button>
        </CardActions>
      </Card>
      <List {...props} exporter={false}>
        {isSmall ? (
          <>
            <SimpleList
              sx={{
                borderRadius: "0.5rem",
                boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
                divider: "2px",
              }}
              linkType="show"
              primaryText={(record) => <b>{record.title}</b>}
              secondaryText={(record) => `Updated By: ${record.name}`}
            />
          </>
        ) : (
          <div>
            <Card>
              <Datagrid rowClick="show" bulkActionButtons={false}>
                <TextField source="name" />
                <TextField source="title" />
                <TextField source="status" />
                <ShowButton label="Show" />
              </Datagrid>
            </Card>
          </div>
        )}
      </List>
    </>
  );
};

export const FoundShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Name" />
      <TextField source="USN" label="USN" />
      <TextField source="title" label="Problem Title" />
      <RichTextField source="body" />
      <TextField source="category" />
      <TextField source="status" />
      <EmailField source="updatedby" />
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="createdate"
      />
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="lastupdate"
      />
    </SimpleShowLayout>
  </Show>
);

export const FoundCreate = (props) => {
  //assign display name if user is logged in
  if (firebase.auth().currentUser) {
    var name = firebase.auth().currentUser.displayName;
    var email = firebase.auth().currentUser.email;
    //strip the email to get the USN
    email = email.substring(0, email.indexOf("@"));
    console.log(email);
  } else {
    var name = "";
    var email = "1MS";
  }
  return (
    <Create redirect="show" {...props}>
      <SimpleForm>
        <TextInput
          variant="filled"
          label="Name"
          source="name"
          defaultValue={name}
        />
        <TextInput
          label="USN"
          source="USN"
          defaultValue={email}
          validate={USN}
        />
        <Typography sx={{ mt: 2 }}>Choose the Item Category</Typography>
        <SelectInput
          source="category"
          choices={[
            { id: "Keys", name: "Keys" },
            {
              id: "Personal documents(ID's, DL, Passport)",
              name: "Personal documents(ID's, DL, Passport)",
            },
            { id: "Wallets and purse", name: "Wallets and purse" },
            {
              id: "Electronic (such as laptops, phones, and chargers)",
              name: "Electronic (such as laptops, phones, and chargers)",
            },
            { id: "Backpacks and bags", name: "Backpacks and bags" },
            {
              id: "Stationary (Books and Pens)",
              name: "Stationary (Books and Pens)",
            },
            {
              id: "Clothing and accessories",
              name: "Clothing and accessories",
            },
            { id: "Jewelry", name: "Jewelry" },
            { id: "Sporting equipment", name: "Sporting equipment" },
            { id: "Others", name: "Others" },
          ]}
          // choices={[
          //   { id: "keys", name: "Keys" },
          //   { id: "documents", name: "Personal documents(ID's, DL, Passport)" },
          //   { id: "wallets", name: "Wallets and purse" },
          //   {
          //     id: "electronic",
          //     name: "Electronic (such as laptops, phones, and chargers)",
          //   },
          //   { id: "backpacks", name: "Backpacks and bags" },
          //   {
          //     id: "stationary",
          //     name: "Stationary (Books, Pens and notebooks)",
          //   },
          //   { id: "clothing", name: "Clothing and accessories" },
          //   { id: "jewelry", name: "Jewelry" },
          //   { id: "sporting", name: "Sporting equipment" },
          //   { id: "others", name: "Others" },
          // ]}
        />
        <TextInput
          multiline
          fullWidth
          label="Item Name"
          source="title"
          validate={title}
        />
        <Typography sx={{ mt: 1 }}>
          <b>Item Description:</b>
        </Typography>
        <RichTextInput
          fullWidth
          multiline
          label=""
          source="body"
          validate={ideaDescription}
          helperText="Describe atleast with 60 characters"
        />
        <ImageInput
          source="images"
          label="Related images"
          accept="image/*"
          placeholder={<p>Drop your image here</p>}
          multiple
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <Typography sx={{ mt: 2 }}>Choose the Item Status</Typography>
        <SelectInput
          title="Status"
          source="status"
          choices={[
            { id: "Found", name: "Found" },
            { id: "Pending Verification", name: "Pending Verification" },
            { id: "Returned to Owner", name: "Returned to Owner" },
            { id: "Sent to Campus Security", name: "Sent to Campus Security" },
            { id: "Unable to Return", name: "Unable to Return" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export const FoundEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="name" />
      <TextInput disabled source="title" />
      <TextInput disabled source="USN" />
      <RichTextInput source="body" />
      <TextInput disabled source="category" />
      <SelectInput
        title="Status"
        source="status"
        choices={[
          { id: "pending", name: "Pending" },
          { id: "inprogress", name: "In Progress" },
          { id: "resolved", name: "Resolved" },
        ]}
      />
      <Typography>Created Date:</Typography>
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="lastupdate"
      />
    </SimpleForm>
  </Edit>
);

export const LostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (firebase.auth().currentUser) {
    var email = firebase.auth().currentUser.email;
    var name = email.split("@");
  }

  return (
    <>
      <Card sx={{ minWidth: 275, mt: 3, mb: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Campus Queries
          </Typography>
          <Typography variant="h6" component="div">
            Find Your Lost Belongings on College Campuses
          </Typography>
          <Typography variant="body2">
            Lost your keys, wallet, or laptop on campus? Don't worry, Campus
            Queries is here to help! Our platform allows users to search for
            reported lost items on college campuses. With a wide range of items
            reported lost, you're sure to find what you're looking for on Campus
            Queries. Start searching today and get your lost items back in your
            hands!
          </Typography>
          <Typography variant="body2">
            <b>{email}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={{
              pathname: "/lost/create",
            }}
          >
            Find Now
          </Button>
        </CardActions>
      </Card>
      <List {...props} exporter={false}>
        {isSmall ? (
          <>
            <SimpleList
              sx={{
                borderRadius: "0.5rem",
                boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
                divider: "2px",
              }}
              linkType="show"
              primaryText={(record) => <b>{record.title}</b>}
              secondaryText={(record) => `Updated By: ${record.name}`}
            />
          </>
        ) : (
          <div>
            <Card>
              <Datagrid rowClick="show" bulkActionButtons={false}>
                <TextField source="name" />
                <TextField source="title" />
                <TextField source="status" />
                <ShowButton label="Show" />
              </Datagrid>
            </Card>
          </div>
        )}
      </List>
    </>
  );
};

export const LostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Name" />
      <TextField source="USN" label="USN" />
      <TextField source="title" label="Problem Title" />
      <RichTextField source="body" />
      <TextField source="category" />
      <TextField source="status" />
      <EmailField source="updatedby" />
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="createdate"
      />
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="lastupdate"
      />
    </SimpleShowLayout>
  </Show>
);

export const LostCreate = (props) => {
  //assign display name if user is logged in
  if (firebase.auth().currentUser) {
    var name = firebase.auth().currentUser.displayName;
    var email = firebase.auth().currentUser.email;
    //strip the email to get the USN
    email = email.substring(0, email.indexOf("@"));
    console.log(email);
  } else {
    var name = "";
    var email = "1MS";
  }
  return (
    <Create redirect="show" {...props}>
      <SimpleForm>
        <TextInput
          variant="filled"
          label="Name"
          source="name"
          defaultValue={name}
        />
        <TextInput
          label="USN"
          source="USN"
          defaultValue={email}
          validate={USN}
        />
        <Typography sx={{ mt: 2 }}>Choose the Item Category</Typography>
        <SelectInput
          source="category"
          choices={[
            { id: "Keys", name: "Keys" },
            {
              id: "Personal documents(ID's, DL, Passport)",
              name: "Personal documents(ID's, DL, Passport)",
            },
            { id: "Wallets and purse", name: "Wallets and purse" },
            {
              id: "Electronic (such as laptops, phones, and chargers)",
              name: "Electronic (such as laptops, phones, and chargers)",
            },
            { id: "Backpacks and bags", name: "Backpacks and bags" },
            {
              id: "Stationary (Books and Pens)",
              name: "Stationary (Books and Pens)",
            },
            {
              id: "Clothing and accessories",
              name: "Clothing and accessories",
            },
            { id: "Jewelry", name: "Jewelry" },
            { id: "Sporting equipment", name: "Sporting equipment" },
            { id: "Others", name: "Others" },
          ]}
        />
        <TextInput
          multiline
          fullWidth
          label="Item Name"
          source="title"
          validate={title}
        />
        <Typography sx={{ mt: 1 }}>
          <b>Item Description:</b>
        </Typography>
        <RichTextInput
          fullWidth
          multiline
          label=""
          source="body"
          validate={ideaDescription}
          helperText="Describe atleast with 60 characters"
        />
        <ImageInput
          source="images"
          label="Related images"
          accept="image/*"
          placeholder={<p>Drop your image here</p>}
          multiple
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <Typography sx={{ mt: 2 }}>Choose the Item Status</Typography>
        <SelectInput
          title="Status"
          source="status"
          choices={[
            { id: "Found", name: "Found" },
            { id: "Pending Verification", name: "Pending Verification" },
            { id: "Returned to Owner", name: "Returned to Owner" },
            { id: "Sent to Campus Security", name: "Sent to Campus Security" },
            { id: "Unable to Return", name: "Unable to Return" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export const LostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="name" />
      <TextInput disabled source="title" />
      <TextInput disabled source="USN" />
      <RichTextInput source="body" />
      <TextInput disabled source="category" />
      <SelectInput
        title="Status"
        source="status"
        choices={[
          { id: "pending", name: "Pending" },
          { id: "inprogress", name: "In Progress" },
          { id: "resolved", name: "Resolved" },
        ]}
      />
      <Typography>Created Date:</Typography>
      <DateField
        options={{
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
        source="lastupdate"
      />
    </SimpleForm>
  </Edit>
);

export const BlogList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="Title" />
    </Datagrid>
  </List>
);

export const BlogShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      {/* <TextField source="name" /> */}
      <TextField source="Title" />
      <RichTextField source="Description" />
      <DateField source="createdate" />
    </SimpleShowLayout>
  </Show>
);

export const BlogCreate = (props) => (
  <Create redirect="show" {...props}>
    <SimpleForm>
      <TextInput source="Title" />
      <RichTextInput
        source="Description"
        toolbar={<RichTextInputToolbar size="large" />}
      />
    </SimpleForm>
  </Create>
);

export const BlogEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="Title" />
      <RichTextInput
        source="Description"
        toolbar={<RichTextInputToolbar size="medium" />}
      />
    </SimpleForm>
  </Edit>
);

const SimpleBookList = () => {
  const { data } = useListContext();
  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      {data.map((book) => (
        <Typography key={book.id}>
          <i>{book.title}</i>, by {book.author} ({book.year})
        </Typography>
      ))}
    </Stack>
  );
};
export const BookList = () => (
  <List emptyWhileLoading>
    <SimpleBookList />
  </List>
);
