# Email 3 — Segmentation

**Send:** 10 days after Email 0
**Subject:** Quick — when are you visiting?
**Preview text:** Just hit reply with one word. Helps me send you the right stuff.

---

One small favor.

I send maybe one email a month, and I try to make each one actually useful instead of generic newsletter filler. To do that I need to know roughly **when** you're thinking of visiting.

So if you can spare ten seconds, hit reply with one of these:

- **Summer** (June – August)
- **Fall** (September – November)
- **Winter** (December – February)
- **Spring** (March – May)
- **Not sure yet** is also a fine answer

I'll tag you accordingly and send you season-specific stuff — the August beach-day timing email goes to summer people, the October foliage + off-season hotel deal email goes to fall people, the "yes there really are things to do here in February" email goes to the winter brave. Nobody gets all of them, which is the point.

If you don't reply, no problem — I'll just send you everything and you can use the unsubscribe link if it stops being relevant.

— [YOUR_NAME]

---

## Implementation note (delete before sending)

In Kit, set this up as an automation step:
- After this email sends, **wait 7 days** for a reply.
- Use Kit's "applies tag when subscriber replies" rule if you have it on your plan, OR manually scan replies and tag (it'll be a small number at first — totally manageable for the first few months).
- Subscribers who reply also get the `engaged:replied` tag — these are your hot list.
- Subscribers who don't reply still flow into the regular broadcast list, just without a season tag.
