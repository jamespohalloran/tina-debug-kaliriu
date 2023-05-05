import { defineConfig } from "tinacms";
import { blog_postFields } from "./templates";
import { configFields } from "./templates";
import { legal_postFields } from "./templates";
import { module__ctaFields } from "./templates";
import { module__faqFields } from "./templates";
import { module__footerFields } from "./templates";
import { page__aboutFields } from "./templates";
import { page__blogFields } from "./templates";
import { page__contactFields } from "./templates";
import { page__homepageFields } from "./templates";
import { page__projectsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "b829abcd-ec02-4549-80a5-e49ad1db413c", // Get this from tina.io
  token: "419ffcc649e6110f451418d7da5ac931cf3a2d11", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Homepage",
        name: "homepage",
        path: "content/english",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Projects",
        name: "projectsEn",
        path: "content/english",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "projects",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "About",
        name: "aboutEn",
        path: "content/english",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/english",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "postsEn",
        path: "content/english/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_postFields(),
        ],
      },
      {
        format: "yml",
        label: "Modules",
        name: "modulesEn",
        path: "data/en",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: module__ctaFields(),
            label: "module-cta",
            name: "module_cta",
          },
          {
            fields: module__footerFields(),
            label: "module-footer",
            name: "module_footer",
          },
          {
            fields: module__faqFields(),
            label: "module-faq",
            name: "module_faq",
          },
        ],
      },
      {
        format: "md",
        label: "Legal",
        name: "legalEn",
        path: "content/english/legal",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...legal_postFields(),
        ],
      },
      {
        format: "yaml",
        label: "String ID",
        name: "string_idEn",
        path: "i18n",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "en",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Inicio",
        name: "inicio",
        path: "content/spanish",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Proyectos",
        name: "proyectos",
        path: "content/spanish",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "projects",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Sobre nosotros",
        name: "sobre_nosotros",
        path: "content/spanish",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Contacto",
        name: "contacto",
        path: "content/spanish",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "postsSp",
        path: "content/spanish/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_postFields(),
        ],
      },
      {
        format: "yml",
        label: "Módulos",
        name: "m_dulos",
        path: "data/es",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: module__ctaFields(),
            label: "module-cta",
            name: "module_cta",
          },
          {
            fields: module__footerFields(),
            label: "module-footer",
            name: "module_footer",
          },
          {
            fields: module__faqFields(),
            label: "module-faq",
            name: "module_faq",
          },
        ],
      },
      {
        format: "md",
        label: "Legal",
        name: "legalSp",
        path: "content/spanish/legal",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...legal_postFields(),
        ],
      },
      {
        format: "yaml",
        label: "Hilo ID",
        name: "hilo_id",
        path: "i18n",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "es",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Acceuil",
        name: "acceuil",
        path: "content/french",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Projects",
        name: "projectsFr",
        path: "content/french",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "projects",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "About",
        name: "aboutFr",
        path: "content/french",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Contacte",
        name: "contacte",
        path: "content/french",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "postsFr",
        path: "content/french/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_postFields(),
        ],
      },
      {
        format: "yml",
        label: "Modules",
        name: "modulesFr",
        path: "data/fr",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: module__ctaFields(),
            label: "module-cta",
            name: "module_cta",
          },
          {
            fields: module__footerFields(),
            label: "module-footer",
            name: "module_footer",
          },
          {
            fields: module__faqFields(),
            label: "module-faq",
            name: "module_faq",
          },
        ],
      },
      {
        format: "md",
        label: "Legal",
        name: "legalFr",
        path: "content/french/legal",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...legal_postFields(),
        ],
      },
      {
        format: "yaml",
        label: "String ID",
        name: "string_idFr",
        path: "i18n",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "fr",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
