import React, { useRef } from "react";
import { Col, FormLabel, Button } from "react-bootstrap";
import { Controller, useFieldArray } from "react-hook-form";

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
      <Col xs={6}>
        <FormLabel>Documents</FormLabel>

        {fields.map(({ documentId, file }, index) => (
          <div key={documentId}>
            <Controller
              control={control}
              name={`documents.${index}`}
              render={() => (
                <div>
                  <div>{file.name}</div>

                  <div>
                    <div aria-label="Remove" onClick={() => remove(index)}>
                      X
                    </div>
                  </div>
                </div>
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
