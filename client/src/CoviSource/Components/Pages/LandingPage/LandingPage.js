import React from "react";
import { makeStyles } from "@material-ui/core";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import Header from "CoviSource/Components/UtilityComponents/Header/Header";

// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for the page
import ResourcesCardView from "CoviSource/Components/UtilityComponents/ResourcesCardSection/CardView";
// utility components
import SearchBar from "CoviSource/Components/UtilityComponents/SearchBar/SearchBar";

import styles from "assets/jss/material-kit-react/views/components.js";

import { isMobile } from "CoviSource/UtilityFunctions";
import coviLogo from "assets/img/logo.svg";
import bgImage from "assets/img/bg.jpg";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROVIDERS } from "CoviSource/graphql/queries/Provider/GetAllProviders";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const { loading, data, error } = useQuery(GET_ALL_PROVIDERS);
  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;
  if (data) console.log(data);

  // const [data, setData] = useState([
  //   {
  //     username: "someUsername",
  //     resourceProviderName: "Resource Provider Name",
  //     availability: "UNUPDATED",
  //     resources: [
  //       {
  //         resource: "Oxygen refilling",
  //         quantity: 32,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //       {
  //         resource: "Hospital Beds",
  //         quantity: 23,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //       {
  //         resource: "Remdesivir Vials",
  //         quantity: 65,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //     ],
  //     address: "Provider Address",
  //     contactPersonName: "Contact Person's Name",
  //     phoneNumber: "9821095754",
  //     serviceName: "Service Provided",
  //   },
  //   {
  //     username: "anotherUsername",
  //     resourceProviderName: "Free oxygen seva vijaya nagar",
  //     availability: "AVAILABLE",
  //     resources: [
  //       {
  //         resource: "Oxygen refilling",
  //         quantity: 32,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //       {
  //         resource: "Hospital Beds",
  //         quantity: 23,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //       {
  //         resource: "Remdesivir Vials",
  //         quantity: 65,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //     ],
  //     address: "Free oxygen seva, near gurudwara, delhi",
  //     contactPersonName: "Jaspal Singh",
  //     phoneNumber: "9821095754",
  //     serviceName: "Oxygen refilling",
  //   },
  //   {
  //     username: "anotherUsername2",
  //     resourceProviderName: "Apex Hospital",
  //     availability: "UNAVAILABLE",
  //     resources: [
  //       {
  //         resource: "Oxygen Cylinders",
  //         quantity: 0,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //       {
  //         resource: "Hospital Beds",
  //         quantity: 0,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //       {
  //         resource: "Remdesivir Vials",
  //         quantity: 0,
  //         updated: "06:00 PM, 27 APRIL",
  //       },
  //     ],
  //     address: "Apex Hospital, Kalyan West, Mumbai",
  //     contactPersonName: "Dr. D P Goel",
  //     phoneNumber: "9789965234",
  //     serviceName: "Hospital",
  //   },
  // ]);

  const onSearchButtonClick = function () {
    console.log("Search Button Clicked");

    // a fetch operation will be made here which will then update the state -> data;
    // setData([
    //   {
    //     username: "someUsername",
    //     resourceProviderName: "Resource Provider Name",
    //     availability: "UNUPDATED",
    //     resources: [
    //       {
    //         resource: "Oxygen refilling",
    //         quantity: 32,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //       {
    //         resource: "Hospital Beds",
    //         quantity: 23,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //       {
    //         resource: "Remdesivir Vials",
    //         quantity: 65,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //     ],
    //     address: "Provider Address",
    //     contactPersonName: "Contact Person's Name",
    //     phoneNumber: "9821095754",
    //     serviceName: "Service Provided",
    //   },
    //   {
    //     username: "anotherUsername",
    //     resourceProviderName: "Free oxygen seva vijaya nagar",
    //     availability: "AVAILABLE",
    //     resources: [
    //       {
    //         resource: "Oxygen refilling",
    //         quantity: 32,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //       {
    //         resource: "Hospital Beds",
    //         quantity: 23,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //       {
    //         resource: "Remdesivir Vials",
    //         quantity: 65,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //     ],
    //     address: "Free oxygen seva, near gurudwara, delhi",
    //     contactPersonName: "Jaspal Singh",
    //     phoneNumber: "9821095754",
    //     serviceName: "Oxygen refilling",
    //   },
    //   {
    //     username: "anotherUsername2",
    //     resourceProviderName: "Apex Hospital",
    //     availability: "UNAVAILABLE",
    //     resources: [
    //       {
    //         resource: "Oxygen Cylinders",
    //         quantity: 0,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //       {
    //         resource: "Hospital Beds",
    //         quantity: 0,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //       {
    //         resource: "Remdesivir Vials",
    //         quantity: 0,
    //         updated: "06:00 PM, 27 APRIL",
    //       },
    //     ],
    //     address: "Apex Hospital, Kalyan West, Mumbai",
    //     contactPersonName: "Dr. D P Goel",
    //     phoneNumber: "9789965234",
    //     serviceName: "Hospital",
    //   },
    // ]);
  };
  const renderResourcesCards = () => {
    return (
      <div
        className={
          isMobile()
            ? classNames(classes.main)
            : classNames(classes.main, classes.mainRaised)
        }
      >
        <ResourcesCardView data={data.allProviders} />
      </div>
    );
  };
  if (data.allProviders) {
    return (
      <div>
        <Header theme="LIGHT" {...rest} />
        <Parallax image={bgImage}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    <img
                      src={coviLogo}
                      height={isMobile() ? "35px" : "62px"}
                      alt=""
                    />
                  </h1>
                  <h3 className={classes.subtitleReduced}>
                    Find resources that you need
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
            <SearchBar
              tags={["Oxygen"]}
              callBackFunction={onSearchButtonClick}
            />
          </div>
        </Parallax>
        {renderResourcesCards()}
      </div>
    );
  }
}
