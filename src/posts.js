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
              pathname: "/posts/create",
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
// const ConditionalEmailField = ({}) =>
//   record && record.hasEmail ? (
//     <EmailField source="email" record={record} {...rest} />
//   ) : null;
export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <TextField source="title" />
      <RichTextField source="body" />
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
const validateFirstName = [required(), minLength(3), maxLength(20)];
const ideaDescription = [required(), minLength(120)];
const USN = [required(), minLength(10)];
const title = [required()];

export const PostCreate = (props) => (
  <Create redirect="show" {...props}>
    <SimpleForm>
      <TextInput
        variant="filled"
        label="Name"
        source="name"
        validate={validateFirstName}
      />
      <TextInput label="USN" source="USN" defaultValue="1MS" validate={USN} />
      <TextInput
        multiline
        fullWidth
        label="Idea Title"
        source="title"
        validate={title}
      />
      <Typography sx={{ mt: 1 }}>
        <b>Idea Description:</b>
      </Typography>
      <RichTextInput
        fullWidth
        label=""
        source="body"
        validate={ideaDescription}
        helperText="Describe atleast with 120 characters"
      />
      <Typography sx={{ mt: 2 }}>Stage You Are At:</Typography>
      <SelectInput
        source="stage"
        choices={[
          { id: "ideastage", name: "Idea Stage" },
          { id: "designed", name: "Designed and Engineered" },
          { id: "prototyped", name: "Prototyped" },
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

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="name" />
      <TextInput source="title" />
      <RichTextInput source="body" />
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
