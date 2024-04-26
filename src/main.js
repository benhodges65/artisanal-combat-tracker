import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/index.js'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import Dropdown from 'primevue/dropdown'
import BaseCard from './components/ui/BaseCard.vue'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import RadioButton from 'primevue/radiobutton'
import Card from 'primevue/card'
import MultiSelect from 'primevue/multiselect'
import Tooltip from 'primevue/tooltip'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row'
import ButtonGroup from 'primevue/buttongroup'
import ConfirmPopup from 'primevue/confirmpopup'
import ConfirmationService from 'primevue/confirmationservice'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Listbox from 'primevue/listbox'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ConfirmationService)
app.use(ToastService)
app.use(store)

app.component('Panel', Panel)
app.component('Button', Button)
app.component('base-card', BaseCard)
app.component('SelectButton', SelectButton)
app.component('Dropdown', Dropdown)
app.component('InputText', InputText)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('RadioButton', RadioButton)
app.component('Card', Card)
app.component('MultiSelect', MultiSelect)
app.directive('tooltip', Tooltip)
app.component('Dialog', Dialog)
app.component('DataView', DataView)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('ButtonGroup', ButtonGroup)
app.component('ConfirmPopup', ConfirmPopup)
app.component('Toast', Toast)
app.component('Listbox', Listbox)
app.component('Slider', Slider)
app.component('InputNumber', InputNumber)
app.component('Textarea', Textarea)

app.mount('#app')
