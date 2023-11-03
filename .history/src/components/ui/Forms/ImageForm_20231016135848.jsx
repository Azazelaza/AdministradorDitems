import React, { useRef } from "react";
import { Col, FormLabel, Button } from "react-bootstrap";
import { Controller, useFieldArray } from "react-hook-form";

export const ImageForm = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "documents",
    keyName: "documentId",
  });

  const handleAddDocuments = (event) => {
    append(event.target.files[0]);
  };

  return (
    <>
      <input type="file" multiple='false' onChange={handleAddDocuments}/>
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

        <Button variant="text">
          Add documents
        </Button>
      </Col>
    </>
  );
};
