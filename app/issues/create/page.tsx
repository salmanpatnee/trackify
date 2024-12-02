import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const CreateIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5" >
        <TextField.Root placeholder="Title" />
        <TextArea placeholder="Description" />
        <Button>Add new issue</Button>
    </div>
      
  );
};

export default CreateIssuePage;
