import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/login";
import UserDetails from "./containers/user";
import WebsocketTest from "./components/websocket";
import ScrollTest from "./components/scroll";

import MyGrid from "./components/grid"
import MySpinner from "./components/ant-design/spinners"
import UiDesigns from "./containers/ant-material-ui"
import MyAlert from "./components/ant-design/alert";
import MyAnchor from "./components/ant-design/anchor";
import Complete from "./components/ant-design/autoComplete";
import Badge1 from "./components/ant-design/badge1";
import Buttons from "./components/ant-design/btn";
import CardSkeleton from "./components/ant-design/card-skeleton";
import TabsCard from "./components/ant-design/card-tabs";
import Cascaders from "./components/ant-design/cascader";
import MyCorousel from "./components/ant-design/corousel";
import MyComments from "./components/ant-design/comment";
import Countdown from "./components/ant-design/countdown";
import PickerSizesDemo from "./components/ant-design/datePicker";
import MyDivider from "./components/ant-design/divider";
import Emptybox from "./components/ant-design/empty";
import ExpandPanel from "./components/ant-design/expand";
import Grids from "./components/ant-design/grid";
import InputFields from "./components/ant-design/input";
import MyList from "./components/ant-design/list";
import MyModel from "./components/ant-design/model";
import CollectionsPage from "./components/ant-design/modelForm";
import MyNotifications from "./components/ant-design/notification";
import PopConfirmForMe from "./components/ant-design/popconfirm";
import PopOverMe from "./components/ant-design/popover";
import MyProgressBar from "./components/ant-design/progressbar";
import RadioBtn from "./components/ant-design/radio-switch";
import MySkeleton from "./components/ant-design/skeleton";
import AlertSpinner from "./components/ant-design/spinner-alert";
import StepsforMe from "./components/ant-design/steps";
import SlidingTabsDemo from "./components/ant-design/tabs";
import MyTimeline from "./components/ant-design/timeline";
import MyTooltip from "./components/ant-design/tootip";
import TransferComp from "./components/ant-design/transfer";
import TreeSelection from "./components/ant-design/treeSelect";
import MyUpload from "./components/ant-design/upload";
import UploadBtnDrag from "./components/ant-design/upload2";
import Upload3 from "./components/ant-design/upload3";
import TemporaryDrawers from "./components/ant-design/material-ui/material-drawer";
import ControlledExpansionPanels from "./components/ant-design/material-ui/material-expansion-panel";
import CustomizedExpansionPanel from "./components/ant-design/material-ui/material-expansion-panel2";
import SelectedListItem from "./components/ant-design/material-ui/material-list";
import RenderPropsMenu from "./components/ant-design/material-ui/material-list-selector-menu";
import SimpleTable from "./components/ant-design/material-ui/material-list-table";
import PaperSheet from "./components/ant-design/material-ui/material-paper";
import CircularIndeterminate from "./components/ant-design/material-ui/material-progressbar-1";
import CircularIntegration from "./components/ant-design/material-ui/material-progressbar-2";
import CircularDeterminate from "./components/ant-design/material-ui/material-progressbar-3";
import LinearIndeterminate from "./components/ant-design/material-ui/material-progressbar-4";
import LinearDeterminate from "./components/ant-design/material-ui/material-progressbar-5";
import LinearBuffer from "./components/ant-design/material-ui/material-progressbar-6";
import LinearQuery from "./components/ant-design/material-ui/material-progressbar-7";
import RadioButtonsGroup from "./components/ant-design/material-ui/material-radio-1";
import FormControlLabelPosition from "./components/ant-design/material-ui/material-radio-2";
import SimpleSelect from "./components/ant-design/material-ui/material-select-1";
import DialogSelect from "./components/ant-design/material-ui/material-select-(model)-2";
import SimpleSnackbar from "./components/ant-design/material-ui/material-snakbar-1";
import CustomizedSnackbars from "./components/ant-design/material-ui/material-snakbar-2";
import PositionedSnackbar from "./components/ant-design/material-ui/material-snakbar-3";
import LongTextSnackbar from "./components/ant-design/material-ui/material-snakbar-4";
import ConsecutiveSnackbars from "./components/ant-design/material-ui/material-snakbar-5";
import IntegrationNotistack from "./components/ant-design/material-ui/MATERIAL-SNAKBAR-6-NOTISTAK";
import SpanningTable from "./components/ant-design/material-ui/material-table-spaning";
import ScrollableTabsButtonAuto from "./components/ant-design/material-ui/material-tabs";
import InputWithIcon from "./components/ant-design/material-ui/material-taxt-field";
import SwitchLabels from "./components/ant-design/material-ui/material-toggle";
import SimpleGrow from "./components/ant-design/material-ui/material-transition-1";
import SimpleCollapse from "./components/ant-design/material-ui/material-transition-2";
import SimpleZoom from "./components/ant-design/material-ui/material-transition-3";
import VerticalLinearStepper from "./components/ant-design/material-ui/material-verticle-step";
import IconButtons from "./components/ant-design/material-ui/material-iconbtn";
import MaterialUIPickers from "./components/ant-design/material-ui/MATERIAL-UI-PICKERS";
import ReactVirtualizedTable from "./components/ant-design/material-ui/material-table-virtualized";




const AppRouter = () => (
  <Switch>
    <Route exact path="/auth/login/" component={Login} />
    <Route exact path="/auth/user/" component={UserDetails} />
    <Route exact path="/auth/sockettest/" component={WebsocketTest} />
    <Route exact path="/auth/scroll/" component={ScrollTest} /> 
    <Route exact path="/auth/antgrid/" component={Grids} /> 
    <Route exact path="/auth/mygrid/" component={MyGrid} /> 
    <Route exact path="/auth/antspinner/" component={MySpinner} /> 
    <Route exact path="/auth/uidesigns/" component={UiDesigns} /> 
    <Route exact component={MyGrid} path="/auth/components/grid/" />
    <Route exact component={UiDesigns} path="/auth/containers/ant-material-ui/" />
    <Route exact component={MyAlert} path="/auth/components/ant-design/alert/" />
    <Route exact component={MyAnchor} path="/auth/components/ant-design/anchor/" />
    <Route exact component={Complete} path="/auth/components/ant-design/autoComplete/" />
    <Route exact component={Badge1} path="/auth/components/ant-design/badge1/" />
    <Route exact component={Buttons} path="/auth/components/ant-design/btn/" />
    <Route exact component={CardSkeleton} path="/auth/components/ant-design/card-skeleton/" />
    <Route exact component={TabsCard} path="/auth/components/ant-design/card-tabs/" />
    <Route exact component={Cascaders} path="/auth/components/ant-design/cascader/" />
    <Route exact component={MyCorousel} path="/auth/components/ant-design/corousel/" />
    <Route exact component={MyComments} path="/auth/components/ant-design/comment/" />
    <Route exact component={Countdown} path="/auth/components/ant-design/countdown/" />
    <Route exact component={PickerSizesDemo} path="/auth/components/ant-design/datePicker/" />
    <Route exact component={MyDivider} path="/auth/components/ant-design/divider/" />
    <Route exact component={Emptybox} path="/auth/components/ant-design/empty/" />
    <Route exact component={ExpandPanel} path="/auth/components/ant-design/expand/" />
    <Route exact component={Grids} path="/auth/components/ant-design/grid/" />
    <Route exact component={InputFields} path="/auth/components/ant-design/input/" />
    <Route exact component={MyList} path="/auth/components/ant-design/list/" />
    <Route exact component={MyModel} path="/auth/components/ant-design/model/" />
    <Route exact component={CollectionsPage} path="/auth/components/ant-design/modelForm/" />
    <Route exact component={MyNotifications} path="/auth/components/ant-design/notification/" />
    <Route exact component={PopConfirmForMe} path="/auth/components/ant-design/popconfirm/" />
    <Route exact component={PopOverMe} path="/auth/components/ant-design/popover/" />
    <Route exact component={MyProgressBar} path="/auth/components/ant-design/progressbar/" />
    <Route exact component={RadioBtn} path="/auth/components/ant-design/radio-switch/" />
    <Route exact component={MySkeleton} path="/auth/components/ant-design/skeleton/" />
    <Route exact component={AlertSpinner} path="/auth/components/ant-design/spinner-alert/" />
    <Route exact component={StepsforMe} path="/auth/components/ant-design/steps/" />
    <Route exact component={SlidingTabsDemo} path="/auth/components/ant-design/tabs/" />
    <Route exact component={MyTimeline} path="/auth/components/ant-design/timeline/" />
    <Route exact component={MyTooltip} path="/auth/components/ant-design/tootip/" />
    <Route exact component={TransferComp} path="/auth/components/ant-design/transfer/" />
    <Route exact component={TreeSelection} path="/auth/components/ant-design/treeSelect/" />
    <Route exact component={MyUpload} path="/auth/components/ant-design/upload/" />
    <Route exact component={UploadBtnDrag} path="/auth/components/ant-design/upload2/" />
    <Route exact component={Upload3} path="/auth/components/ant-design/upload3/" />
    <Route exact component={TemporaryDrawers} path="/auth/components/ant-design/material-ui/material-drawer/" />
    <Route exact component={ControlledExpansionPanels} path="/auth/components/ant-design/material-ui/material-expansion-panel/" />
    <Route exact component={CustomizedExpansionPanel} path="/auth/components/ant-design/material-ui/material-expansion-panel2/" />
    <Route exact component={SelectedListItem} path="/auth/components/ant-design/material-ui/material-list/" />
    <Route exact component={RenderPropsMenu} path="/auth/components/ant-design/material-ui/material-list-selector-menu/" />
    <Route exact component={SimpleTable} path="/auth/components/ant-design/material-ui/material-list-table/" />
    <Route exact component={PaperSheet} path="/auth/components/ant-design/material-ui/material-paper/" />
    <Route exact component={CircularIndeterminate} path="/auth/components/ant-design/material-ui/material-progressbar-1/" />
    <Route exact component={CircularIntegration} path="/auth/components/ant-design/material-ui/material-progressbar-2/" />
    <Route exact component={CircularDeterminate} path="/auth/components/ant-design/material-ui/material-progressbar-3/" />
    <Route exact component={LinearIndeterminate} path="/auth/components/ant-design/material-ui/material-progressbar-4/" />
    <Route exact component={LinearDeterminate} path="/auth/components/ant-design/material-ui/material-progressbar-5/" />
    <Route exact component={LinearBuffer} path="/auth/components/ant-design/material-ui/material-progressbar-6/" />
    <Route exact component={LinearQuery} path="/auth/components/ant-design/material-ui/material-progressbar-7/" />
    <Route exact component={RadioButtonsGroup} path="/auth/components/ant-design/material-ui/material-radio-1/" />
    <Route exact component={FormControlLabelPosition} path="/auth/components/ant-design/material-ui/material-radio-2/" />
    <Route exact component={SimpleSelect} path="/auth/components/ant-design/material-ui/material-select-1/" />
    <Route exact component={DialogSelect} path="/auth/components/ant-design/material-ui/material-select-(model)-2/" />
    <Route exact component={SimpleSnackbar} path="/auth/components/ant-design/material-ui/material-snakbar-1/" />
    <Route exact component={CustomizedSnackbars} path="/auth/components/ant-design/material-ui/material-snakbar-2/" />
    <Route exact component={PositionedSnackbar} path="/auth/components/ant-design/material-ui/material-snakbar-3/" />
    <Route exact component={LongTextSnackbar} path="/auth/components/ant-design/material-ui/material-snakbar-4/" />
    <Route exact component={ConsecutiveSnackbars} path="/auth/components/ant-design/material-ui/material-snakbar-5/" />
    <Route exact component={IntegrationNotistack} path="/auth/components/ant-design/material-ui/MATERIAL-SNAKBAR-6-NOTISTAK/" />    
    <Route exact component={SpanningTable} path="/auth/components/ant-design/material-ui/material-table-spaning/" />
    <Route exact component={ScrollableTabsButtonAuto} path="/auth/components/ant-design/material-ui/material-tabs/" />
    <Route exact component={InputWithIcon} path="/auth/components/ant-design/material-ui/material-taxt-field/" />
    <Route exact component={SwitchLabels} path="/auth/components/ant-design/material-ui/material-toggle/" />
    <Route exact component={SimpleGrow} path="/auth/components/ant-design/material-ui/material-transition-1/" />
    <Route exact component={SimpleCollapse} path="/auth/components/ant-design/material-ui/material-transition-2/" />
    <Route exact component={SimpleZoom} path="/auth/components/ant-design/material-ui/material-transition-3/" />
    <Route exact component={MaterialUIPickers} path="/auth/components/ant-design/material-ui/MATERIAL-UI-PICKERS/" /> *
    <Route exact component={ReactVirtualizedTable} path="/auth/components/ant-design/material-ui/material-table-virtualized/" /> 
    <Route exact component={VerticalLinearStepper} path="/auth/components/ant-design/material-ui/material-verticle-step/" />
    <Route exact component={IconButtons} path="/auth/components/ant-design/material-ui/material-iconbtn" />
  </Switch>
);
export default withRouter(AppRouter);
