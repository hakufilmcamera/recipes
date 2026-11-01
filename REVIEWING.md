# Reviewing a recipe

Every submission gets an automatic check comment. Before adding the
`approve` label, read it, and for any recipe with a **download link**
(an imported look that is not one of Fujifilm's own):

1. **Open the link yourself**, on a computer, before approving.
2. **It is the creator's own page or a known store** - their site, or
   Gumroad, Lemon Squeezy, Payhip, Etsy, Ko-fi, Patreon. Not a URL
   shortener, not a file-sharing page that pushes ads or "download
   managers".
3. **What it offers is a `.cube` file** (or a zip of them), described as
   built for **F-Log2** input. Never an app, a `.dmg`, an `.exe`, a profile
   or anything that asks to be installed.
4. **It asks for nothing it should not**: no login to an unrelated
   service, no payment details on a page that is not a real store.
5. **The look's name matches** the file the recipe names (the check
   comment says which).

If the check flagged the link as **check-link** (its host is not in
`.github/trusted-hosts.txt`), take extra care with 1-4. If the host turns
out to be fine and you expect more from it, add it to that file.

When in doubt, do not approve: comment and ask the author where else the
file is available.

## After publishing

`link-check.yml` opens every published download link once a week. A link
that fails or now sends people to a different site gets a comment on its
recipe's submission issue and the `link-broken` label. Check it; if it is
no longer safe or no longer there, add the `remove` label to unpublish.
