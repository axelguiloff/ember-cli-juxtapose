# Ember-CLI Juxtapose

This addon will display a before/after slider using the [Juxtapose.js](https://juxtapose.knightlab.com/) library

##Installation

`ember install ember-cli-juxtapose`


## Basic Usage

At a minimum, you can provide urls for a before image and after image

```
{{juxtapose-slider beforeImageUrl="https://sample-domain.com/img/before-img.jpg" afterImageUrl="https://sample-domain.com/img/after-img.jpg"}}
```

You can also display labels with `beforeImageLabel` and `afterImageLabel` attributes, and specify image credits with `beforeCredit` and `afterCredit`.

## Thanks

JuxtaposeJS is one of a series of tools for content creators produced by the Northwestern University Knight Lab. It was created by Medill student Alex Duner.
