# Haku Recipes

Shared film recipes for [Haku](https://hakufilmcamera.app), the film
simulation camera. A recipe is a small JSON file of parameters - which look,
how strongly, and the light and finish settings around it. It carries no
image data and no colour data.

## The one rule

**Community recipes use only the looks Haku ships with**: Linen, Dune,
Slate, Pewter, Lichen, Harbour, Ember, Kingfisher and Ink. A recipe built on
an imported look would render wrong for everyone who lacks the file it
names, so submissions naming anything else are declined - the app filters
them out regardless.

## Submitting a recipe

1. In Haku, open **Recipes**, swipe right on your recipe, tap **Community**.
   The recipe's JSON is copied to your clipboard and this repository's
   submission form opens.
2. Paste the JSON into the form, add a line about what the recipe is for,
   and submit.
3. If it's merged, it appears in the app's Community page for everyone.

By submitting you agree your recipe is published under CC0 - recipes are
settings, and settings want to be copied.

## Voting

Each merged recipe keeps its submission issue open, and a thumbs-up
reaction on that issue is a vote. **Where to find it:** open the recipe's
issue and look just under the first post for the small smiley-face button
- tap it and pick 👍. On the mobile site it sits between the post body and
the comments; on desktop it is at the bottom-left of the post. Vote counts are copied into `index.json`
when recipes are merged or updated, and the app shows its Community page
sorted by them - the app itself never counts or sends anything.

## How this works

`index.json` is the whole database. The app fetches it, nothing more - no
accounts, nothing sent, nothing tracked. Merging a submission is the
moderation.
