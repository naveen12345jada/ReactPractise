import React from 'react'
import { Button, ButtonContent, Icon,Label } from 'semantic-ui-react'

import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'
const ButtonExampleAnimated = () => (
  <>
    <Button animated className='bg-danger'>
      <ButtonContent visible>Next</ButtonContent>
      <ButtonContent hidden>
        <Icon name='arrow right' />
      </ButtonContent>
    </Button>
    <Button animated='vertical' className='bg-danger'>
      <ButtonContent hidden>Shop</ButtonContent>
      <ButtonContent visible>
        <Icon name='shop' />
      </ButtonContent>
    </Button>
    {/* <Button animated='fade' className='bg-danger'>
      <ButtonContent visible>Sign-up for a Pro account</ButtonContent>
      <ButtonContent hidden>$12.99 a month</ButtonContent>
    // </Button> */}  
    {/* btton not visible */}

    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        <Icon name='blind' color='red'  />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button>
  </>
)

const SemanticUi = () => {
  return (
    <div>
      <Button>Click Here</Button>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <ButtonExampleAnimated />
      <GridExampleDividedNumber></GridExampleDividedNumber>
    </div>
  )
}

export default SemanticUi





const GridExampleDividedNumber = () => (
  <Grid columns={5} divided className='mt-5'>
    <GridRow>
      <GridColumn>
        <Image src='https://images.deccanherald.com/deccanherald%2F2024-03%2Fe0130ab6-f8ae-4a5d-8e26-25da22dd54eb%2FMS_Dhoni_s_new_look_ahead_of_IPL__1_.jpg' />
      </GridColumn>
      <GridColumn>
        <Image src='https://images.deccanherald.com/deccanherald%2F2024-03%2Fe0130ab6-f8ae-4a5d-8e26-25da22dd54eb%2FMS_Dhoni_s_new_look_ahead_of_IPL__1_.jpg' />
      </GridColumn>
      <GridColumn>
        <Image src='https://images.deccanherald.com/deccanherald%2F2024-03%2Fe0130ab6-f8ae-4a5d-8e26-25da22dd54eb%2FMS_Dhoni_s_new_look_ahead_of_IPL__1_.jpg' />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn>
        <Image src='https://images.deccanherald.com/deccanherald%2F2024-03%2Fe0130ab6-f8ae-4a5d-8e26-25da22dd54eb%2FMS_Dhoni_s_new_look_ahead_of_IPL__1_.jpg' />
      </GridColumn>
      <GridColumn>
        <Image src='https://images.deccanherald.com/deccanherald%2F2024-03%2Fe0130ab6-f8ae-4a5d-8e26-25da22dd54eb%2FMS_Dhoni_s_new_look_ahead_of_IPL__1_.jpg' />
      </GridColumn>
      <GridColumn>
        <Image src='https://images.deccanherald.com/deccanherald%2F2024-03%2Fe0130ab6-f8ae-4a5d-8e26-25da22dd54eb%2FMS_Dhoni_s_new_look_ahead_of_IPL__1_.jpg' />
      </GridColumn>
    </GridRow>
  </Grid>
)
