import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk";
import {schemaTypes} from './schemas/index'

const config = defineConfig({
    projectId: "qtb4sill",
    dataset: "production",
    title: "OPSCANS Admin Panel",
    apiVersion: "2023-09-21",
    basePath: "/admin",
    plugins: [deskTool( )],
    schema: {
        types: schemaTypes,
      }
})

export default config