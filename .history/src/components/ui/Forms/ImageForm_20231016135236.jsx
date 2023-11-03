import { Button } from "bootstrap";
import React, { useRef } from "react";
import { Col, FormLabel } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";

export const ImageForm = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "documents",
    keyName: "documentId",
  });

  const hiddenFileInput = useRef(null);

  const onAddDocuments = () => {
    hiddenFileInput.current.click();
  };

  const handleAddDocuments = (event) => {
    const uploadedFiles = Array.from(event.target.files);

    const files = uploadedFiles.map((file) => ({
      file,
    }));

    append(files);

    hiddenFileInput.current.value = "";
  };

  return (
    <>
      {/* <HiddenInput
        ref={hiddenFileInput}
        type="file"
        multiple
        onChange={handleAddDocuments}
      /> */}

      <Col xs={6}>
        <FormLabel>Documents</FormLabel>

        {fields.map(({ documentId, file }, index) => (
          <div key={documentId}>
            <Controller
              control={control}
              name={`documents.${index}`}
              render={() => (
                <Grid container alignItems="center">
                  <Grid item xs={10}>
                    {file.name}
                  </Grid>

                  <Grid item xs={2}>
                    <IconButton
                      aria-label="Remove"
                      onClick={() => remove(index)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              )}
            />
          </div>
        ))}

        <Button variant="text" onClick={onAddDocuments}>
          Add documents
        </Button>
      </Col>
    </>
  );
};
