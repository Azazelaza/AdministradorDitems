import React, { useRef } from "react";
import { Col, FormLabel, Button } from "react-bootstrap";
import { Controller, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";

export const ImageForm = ({ control, imageBanner }) => {
  const dispatch = useDispatch();
  const { fields, append, remove } = useFieldArray({
    control,
    name: imageBanner,
    keyName: imageBanner + "id",
  });

  const handleAddDocuments = (event) => {
    dispatch(startUploadImage(event.target.files[0]));
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
