import React, { Component } from 'react';
import { Scrollbars } from "react-custom-scrollbars";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { MDBBtn, MDBIcon } from "mdbreact";
// import Button from '@material-ui/core/Button';
// <Button variant="contained" onClick={this.emitSoc1} color="primary" className={classes.button}>
// <Button variant="contained" onClick={this.emitSoc2} color="secondary" className={classes.button}


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class UiDesigns extends Component {
    state = { 
    	routes:[
            { key : 1, name : "MyAlert", url : "/auth/components/ant-design/alert/", },
            { key : 2, name : "MyAnchor", url : "/auth/components/ant-design/anchor/", },
            { key : 3, name : "Complete", url : "/auth/components/ant-design/autoComplete/", },
            { key : 4, name : "Badge1", url : "/auth/components/ant-design/badge1/", },
            { key : 5, name : "Buttons", url : "/auth/components/ant-design/btn/", },
            { key : "5A", name : "Mat-Buttons", url : "/auth/components/ant-design/material-ui/material-iconbtn", },            
            { key : 6, name : "CardSkeleton", url : "/auth/components/ant-design/card-skeleton/", },
            { key : 7, name : "TabsCard", url : "/auth/components/ant-design/card-tabs/", },
            { key : 8, name : "Cascaders", url : "/auth/components/ant-design/cascader/", },
            { key : 9, name : "MyComments", url : "/auth/components/ant-design/comment/", },
            { key : 10, name : "MyCorousel", url : "/auth/components/ant-design/corousel/", },
            { key : 11, name : "Countdown", url : "/auth/components/ant-design/countdown/", },
            { key : 12, name : "PickerSizesDemo", url : "/auth/components/ant-design/datePicker/", },
            { key : 13, name : "MyDivider", url : "/auth/components/ant-design/divider/", },
            { key : 14, name : "Emptybox", url : "/auth/components/ant-design/empty/", },
            { key : 15, name : "ExpandPanel", url : "/auth/components/ant-design/expand/", },
            { key : 16, name : "Grids", url : "/auth/components/ant-design/grid/", },
            { key : 17, name : "InputFields", url : "/auth/components/ant-design/input/", },
            { key : 18, name : "MyList", url : "/auth/components/ant-design/list/", },
            { key : 19, name : "TemporaryDrawers", url : "/auth/components/ant-design/material-ui/material-drawer/", },
            { key : 20, name : "ControlledExpansionPanels", url : "/auth/components/ant-design/material-ui/material-expansion-panel/", },
            { key : 21, name : "CustomizedExpansionPanel", url : "/auth/components/ant-design/material-ui/material-expansion-panel2/", },
            { key : 22, name : "RenderPropsMenu", url : "/auth/components/ant-design/material-ui/material-list-selector-menu/", },
            { key : 23, name : "SimpleTable", url : "/auth/components/ant-design/material-ui/material-list-table/", },
            { key : 24, name : "SelectedListItem", url : "/auth/components/ant-design/material-ui/material-list/", },
            { key : 25, name : "PaperSheet", url : "/auth/components/ant-design/material-ui/material-paper/", },
            { key : 26, name : "CircularIndeterminate", url : "/auth/components/ant-design/material-ui/material-progressbar-1/", },
            { key : 27, name : "CircularIntegration", url : "/auth/components/ant-design/material-ui/material-progressbar-2/", },
            { key : 28, name : "CircularDeterminate", url : "/auth/components/ant-design/material-ui/material-progressbar-3/", },
            { key : 29, name : "LinearIndeterminate", url : "/auth/components/ant-design/material-ui/material-progressbar-4/", },
            { key : 30, name : "LinearDeterminate", url : "/auth/components/ant-design/material-ui/material-progressbar-5/", },
            { key : 31, name : "LinearBuffer", url : "/auth/components/ant-design/material-ui/material-progressbar-6/", },
            { key : 32, name : "LinearQuery", url : "/auth/components/ant-design/material-ui/material-progressbar-7/", },
            { key : 33, name : "RadioButtonsGroup", url : "/auth/components/ant-design/material-ui/material-radio-1/", },
            { key : 34, name : "FormControlLabelPosition", url : "/auth/components/ant-design/material-ui/material-radio-2/", },
            { key : 35, name : "DialogSelect", url : "/auth/components/ant-design/material-ui/material-select-(model)-2/", },
            { key : 36, name : "SimpleSelect", url : "/auth/components/ant-design/material-ui/material-select-1/", },
            { key : 37, name : "SimpleSnackbar", url : "/auth/components/ant-design/material-ui/material-snakbar-1/", },
            { key : 38, name : "CustomizedSnackbars", url : "/auth/components/ant-design/material-ui/material-snakbar-2/", },
            { key : 39, name : "PositionedSnackbar", url : "/auth/components/ant-design/material-ui/material-snakbar-3/", },
            { key : 40, name : "LongTextSnackbar", url : "/auth/components/ant-design/material-ui/material-snakbar-4/", },
            { key : 41, name : "ConsecutiveSnackbars", url : "/auth/components/ant-design/material-ui/material-snakbar-5/", },
            { key : 42, name : "IntegrationNotistack", url : "/auth/components/ant-design/material-ui/MATERIAL-SNAKBAR-6-NOTISTAK/", },
            { key : 43, name : "SpanningTable", url : "/auth/components/ant-design/material-ui/material-table-spaning/", },
            { key : 44, name : "ReactVirtualizedTable", url : "/auth/components/ant-design/material-ui/material-table-virtualized/", },
            { key : 45, name : "ScrollableTabsButtonAuto", url : "/auth/components/ant-design/material-ui/material-tabs/", },
            { key : 46, name : "InputWithIcon", url : "/auth/components/ant-design/material-ui/material-taxt-field/", },
            { key : 47, name : "SwitchLabels", url : "/auth/components/ant-design/material-ui/material-toggle/", },
            { key : 48, name : "SimpleGrow", url : "/auth/components/ant-design/material-ui/material-transition-1/", },
            { key : 49, name : "SimpleCollapse", url : "/auth/components/ant-design/material-ui/material-transition-2/", },
            { key : 50, name : "SimpleZoom", url : "/auth/components/ant-design/material-ui/material-transition-3/", },
            { key : 51, name : "MaterialUIPickers", url : "/auth/components/ant-design/material-ui/MATERIAL-UI-PICKERS/", },
            { key : 52, name : "VerticalLinearStepper", url : "/auth/components/ant-design/material-ui/material-verticle-step/", },
            { key : 53, name : "MyModel", url : "/auth/components/ant-design/model/", },
            { key : 54, name : "CollectionsPage", url : "/auth/components/ant-design/modelForm/", },
            { key : 55, name : "MyNotifications", url : "/auth/components/ant-design/notification/", },
            { key : 56, name : "PopConfirmForMe", url : "/auth/components/ant-design/popconfirm/", },
            { key : 57, name : "PopOverMe", url : "/auth/components/ant-design/popover/", },
            { key : 58, name : "MyProgressBar", url : "/auth/components/ant-design/progressbar/", },
            { key : 59, name : "RadioBtn", url : "/auth/components/ant-design/radio-switch/", },
            { key : 60, name : "MySkeleton", url : "/auth/components/ant-design/skeleton/", },
            { key : 61, name : "AlertSpinner", url : "/auth/components/ant-design/spinner-alert/", },
            { key : 63, name : "MySpinner", url : "/auth/antspinner/", },
            { key : 64, name : "StepsforMe", url : "/auth/components/ant-design/steps/", },
            { key : 65, name : "SlidingTabsDemo", url : "/auth/components/ant-design/tabs/", },
            { key : 66, name : "MyTimeline", url : "/auth/components/ant-design/timeline/", },
            { key : 67, name : "MyTooltip", url : "/auth/components/ant-design/tootip/", },
            { key : 68, name : "TransferComp", url : "/auth/components/ant-design/transfer/", },
            { key : 69, name : "TreeSelection", url : "/auth/components/ant-design/treeSelect/", },
            { key : 70, name : "MyUpload", url : "/auth/components/ant-design/upload/", },
            { key : 71, name : "UploadBtnDrag", url : "/auth/components/ant-design/upload2/", },
            { key : 72, name : "Upload3", url : "/auth/components/ant-design/upload3/", },
            { key : 73, name : "MyGrid", url : "/auth/components/grid/", },
            { key : 74, name : "UiDesigns", url : "/auth/containers/ant-material-ui/", },    		
    	]
     }
    render() { 
    	const { classes } = this.props;
        return ( 
        	<React.Fragment>
        			<Grid container spacing={24}>
                    {/*<Grid item xs={12}>
                      	<Paper className={classes.paper}>
                         <Scrollbars 
                       //    style={{height:"calc(100vh - 130px)", width:"auto"}}
                       //    autoHide
                       //  > */}
	                        {this.state.routes.map(node=>
                                <Grid item xs={2}>
								    <MDBBtn size="sm" onClick={()=>this.props.history.push(node.url)} color="success">{node.name}</MDBBtn>
                                </Grid>
	                        	)}
                        {/* </Scrollbars> 
                      	</Paper> 
                    </Grid> */}
                </Grid>
        	</React.Fragment>
         );
    }
}
UiDesigns.propTypes = {
    classes: PropTypes.object.isRequired,
};  
export default withStyles(styles)(UiDesigns);
  
