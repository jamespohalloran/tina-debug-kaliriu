import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "slug",
      label: "slug",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "meta_description",
      label: "meta_description",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
export function configFields() {
  return [
    {
      type: "string",
      name: "DefaultContentLanguage",
      label: "DefaultContentLanguage",
    },
    {
      type: "string",
      name: "baseURL",
      label: "baseURL",
    },
    {
      type: "boolean",
      name: "defaultContentLanguageInSubdir",
      label: "defaultContentLanguageInSubdir",
    },
    {
      type: "string",
      name: "disableKinds",
      label: "disableKinds",
      list: true,
    },
    {
      type: "string",
      name: "disqusShortname",
      label: "disqusShortname",
    },
    {
      type: "string",
      name: "metaDataFormat",
      label: "metaDataFormat",
    },
    {
      type: "boolean",
      name: "pluralizeListTitles",
      label: "pluralizeListTitles",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "number",
      name: "Paginate",
      label: "Blog Index Items",
      required: true,
    },
    {
      type: "object",
      name: "params",
      label: "Logo and Backgrounds",
      fields: [
        {
          type: "string",
          name: "assetsURL",
          label: "Assets URL",
        },
        {
          type: "image",
          name: "logo",
          label: "logo",
        },
      ],
    },
    {
      type: "object",
      name: "languages",
      label: "languages",
      fields: [
        {
          type: "object",
          name: "en",
          label: "en",
          fields: [
            {
              type: "string",
              name: "contentDir",
              label: "contentDir",
            },
            {
              type: "string",
              name: "description",
              label: "description",
            },
            {
              type: "string",
              name: "languageName",
              label: "languageName",
            },
            {
              type: "number",
              name: "weight",
              label: "weight",
            },
          ],
        },
        {
          type: "object",
          name: "es",
          label: "es",
          fields: [
            {
              type: "string",
              name: "contentDir",
              label: "contentDir",
            },
            {
              type: "string",
              name: "description",
              label: "description",
            },
            {
              type: "string",
              name: "languageName",
              label: "languageName",
            },
            {
              type: "number",
              name: "weight",
              label: "weight",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function legal_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function module__ctaFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "button_text",
      label: "Button Text",
    },
    {
      type: "string",
      name: "button_link",
      label: "Button Link",
    },
  ] as TinaField[];
}
export function module__faqFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "q_a",
      label: "Q&A",
      list: true,
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function module__footerFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "legal",
      label: "Legal",
      list: true,
      fields: [
        {
          type: "string",
          name: "link_text",
          label: "Link Text",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
  ] as TinaField[];
}
export function page__aboutFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
  ] as TinaField[];
}
export function page__blogFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
  ] as TinaField[];
}
export function page__contactFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
    {
      type: "string",
      name: "name_placeholder",
      label: "Name placeholder",
    },
    {
      type: "string",
      name: "email_placeholder",
      label: "Email placeholder",
    },
    {
      type: "string",
      name: "message_placeholder",
      label: "Message placeholder",
    },
    {
      type: "string",
      name: "button",
      label: "Button",
    },
  ] as TinaField[];
}
export function page__homepageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "meta_description",
      label: "meta_description",
    },
    {
      type: "object",
      name: "button_primary",
      label: "Button primary",
      fields: [
        {
          type: "string",
          name: "link_text",
          label: "Link Text",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "object",
      name: "button_secondary",
      label: "Button secondary",
      fields: [
        {
          type: "string",
          name: "link_text",
          label: "Link Text",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "object",
      name: "projects",
      label: "Projects",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "string",
          name: "link_text",
          label: "Link Text",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "object",
      name: "benefits",
      label: "Benefits",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "title_1",
          label: "Title 1",
        },
        {
          type: "string",
          name: "description_1",
          label: "Description 1",
        },
        {
          type: "string",
          name: "title_2",
          label: "Title 2",
        },
        {
          type: "string",
          name: "description_2",
          label: "Description 2",
        },
        {
          type: "string",
          name: "title_3",
          label: "Title 3",
        },
        {
          type: "string",
          name: "description_3",
          label: "Description 3",
        },
        {
          type: "string",
          name: "title_4",
          label: "Title 4",
        },
        {
          type: "string",
          name: "description_4",
          label: "Description 4",
        },
      ],
    },
    {
      type: "object",
      name: "steps",
      label: "Steps",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "string",
          name: "step_1_title",
          label: "Step 1: Title",
        },
        {
          type: "string",
          name: "step_1_description",
          label: "Step 1: Description",
        },
        {
          type: "string",
          name: "step_2_title",
          label: "Step 2: Title",
        },
        {
          type: "string",
          name: "step_2_description",
          label: "Step 2: Description",
        },
        {
          type: "string",
          name: "step_3_title",
          label: "Step 3: Title",
        },
        {
          type: "string",
          name: "step_3_description",
          label: "Step 3: Description",
        },
        {
          type: "string",
          name: "step_4_title",
          label: "Step 4: Title",
        },
        {
          type: "string",
          name: "step_4_description",
          label: "Step 4: Description",
        },
      ],
    },
    {
      type: "object",
      name: "testimonials",
      label: "Testimonials",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "string",
          name: "client_1_name",
          label: "Client 1: Name",
        },
        {
          type: "string",
          name: "client_1_comment",
          label: "Client 1: Comment",
        },
        {
          type: "string",
          name: "client_2_name",
          label: "Client 2: Name",
        },
        {
          type: "string",
          name: "client_2_comment",
          label: "Client 2: Comment",
        },
        {
          type: "string",
          name: "client_3_name",
          label: "Client 3: Name",
        },
        {
          type: "string",
          name: "client_3_comment",
          label: "Client 3: Comment",
        },
      ],
    },
  ] as TinaField[];
}
export function page__projectsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
    {
      type: "object",
      name: "projects",
      label: "Projects",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "img",
          label: "Img",
        },
        {
          type: "image",
          name: "full_img",
          label: "Full img",
        },
      ],
    },
  ] as TinaField[];
}
