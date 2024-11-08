"use client";
import React from "react";
import TextInput from "@/components/form/TextInput";
import FlexBox from "@/components/frames/FlexBox";
import { useTranslations } from "next-intl";
import CMSTitle from "../primitive/CMSTitle";
import FormFrame from "@/components/form/FormFrame";
import LargeTextInput from "@/components/form/LargeTextInput";
import SubmitButton from "@/components/form/SubmitButton";
import ImageInput from "@/components/form/ImageInput";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const CMSAddNewsForm = () => {
  const t = useTranslations("ContentManagementSystem.News");

  const NewsFormSchema = Yup.object().shape({
    titlePrimary: Yup.string().required("Primary title is required"),
    titleSecondary: Yup.string().nullable(),
    descriptionPrimary: Yup.string().required("Primary description is required"),
    descriptionSecondary: Yup.string().nullable(),
    buttonPrimary: Yup.string().nullable(),
    buttonSecondary: Yup.string().nullable(),
    image: Yup.mixed().nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewsFormSchema, { abortEarly: false }),
    mode: "all",
  });

  const onSubmit = (data: any) => {
    axios
      .post("/api/cms/news", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <CMSTitle text={t("addNews")} />
      <FormFrame onSubmit={handleSubmit(onSubmit)}>
        <FlexBox>
          <TextInput placeholder={t("Form.title")} {...register("titlePrimary")} error={errors.titlePrimary?.message} />
          <TextInput placeholder={t("Form.title_")} {...register("titleSecondary")} error={errors.titleSecondary?.message} />
        </FlexBox>
        <FlexBox>
          <LargeTextInput placeholder={t("Form.description")} {...register("descriptionPrimary")} error={errors.descriptionPrimary?.message} />
          <LargeTextInput placeholder={t("Form.description_")} {...register("descriptionSecondary")} error={errors.descriptionSecondary?.message} />
        </FlexBox>
        <ImageInput text={t("Form.image")} {...register("image")} error={errors.image?.message} />
        <FlexBox>
          <TextInput placeholder={t("Form.button")} {...register("buttonPrimary")} error={errors.buttonPrimary?.message} />
          <TextInput placeholder={t("Form.button_")} {...register("buttonSecondary")} error={errors.buttonSecondary?.message} />
        </FlexBox>
        <SubmitButton text={t("Form.submit")} />
      </FormFrame>
    </>
  );
};

export default CMSAddNewsForm;
