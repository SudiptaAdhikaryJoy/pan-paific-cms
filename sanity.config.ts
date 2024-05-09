import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { ImageHotspotArray } from 'sanity-plugin-hotspot-array'
import {colorInput} from '@sanity/color-input'


export default defineConfig({
  name: 'default',
  title: 'pan-pacific-cms',

  projectId: '4vyb9kdc',
  dataset: 'production',

  plugins: [structureTool(),ImageHotspotArray, visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
