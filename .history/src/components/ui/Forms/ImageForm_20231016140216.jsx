import React, { useRef } from "react";
import { Col, FormLabel, Button } from "react-bootstrap";
import { Controller, useFieldArray } from "react-hook-form";

export const ImageForm = ({ control, imageBanner }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: imageBanner,
    keyName: imageBanner + "id",
  });

  const handleAddDocuments = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const files = uploadedFiles.map((file) => ({
      file,
    }));
    remove(0);
    append(files[0]);
  };

  return (
    <>
      <input type="file" multiple="false" onChange={handleAddDocuments} />
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

        <Button variant="text">Add documents</Button>
      </Col>
    </>
  );
};
