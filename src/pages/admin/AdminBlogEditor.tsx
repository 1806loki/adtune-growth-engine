import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bold, Italic, Heading2, Link2, List, Quote, Image as ImageIcon, Code, Save, Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const tabs = ["Content", "Media", "SEO", "Settings"] as const;
type Tab = typeof tabs[number];

const AdminBlogEditor = () => {
  const [tab, setTab] = useState<Tab>("Content");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [tags, setTags] = useState<string[]>(["seo", "hyderabad"]);
  const [tagInput, setTagInput] = useState("");
  const [status, setStatus] = useState<"Draft" | "Published">("Draft");
  const { toast } = useToast();

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const save = (publish?: boolean) => {
    if (publish) setStatus("Published");
    toast({
      title: publish ? "Post published" : "Draft saved",
      description: publish ? "Your post is now live on the site." : "Your changes have been saved.",
    });
  };

  const ContentPane = (
    <div className="space-y-5">
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (!slug) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").slice(0, 60));
        }}
        placeholder="Untitled post"
        className="h-auto border-0 bg-transparent px-0 font-display text-3xl font-medium leading-tight focus-visible:ring-0 md:text-4xl"
      />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="text-xs tracking-caps">Slug</span>
        <span className="opacity-50">/blog/</span>
        <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="post-url-slug" className="h-9 max-w-md" />
      </div>

      <div className="rounded-xl border border-border bg-surface-elevated/40">
        <div className="flex flex-wrap items-center gap-1 border-b border-border p-2">
          {[Heading2, Bold, Italic, Link2, List, Quote, ImageIcon, Code].map((Icon, i) => (
            <button key={i} className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground">
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
        <Textarea
          rows={16}
          placeholder="Start writing your post… use the toolbar above for formatting."
          className="min-h-[400px] resize-none border-0 bg-transparent p-5 text-base leading-relaxed focus-visible:ring-0"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Excerpt</label>
        <Textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value.slice(0, 160))}
          rows={2}
          placeholder="A short summary that appears in blog listings and previews."
        />
        <div className="mt-1 text-right text-[11px] text-muted-foreground">{excerpt.length}/160</div>
      </div>
    </div>
  );

  const MediaPane = (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-xs tracking-caps text-muted-foreground">Featured image</label>
        <div className="surface-card flex flex-col items-center justify-center gap-3 border-dashed p-10 text-center transition-colors hover:border-primary">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-glow">
            <Upload className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium">Drop an image or click to upload</div>
            <div className="mt-1 text-xs text-muted-foreground">Recommended 1600 × 900 · JPG, PNG, WebP · Max 4 MB</div>
          </div>
          <Button variant="subtle" size="sm">Choose file</Button>
        </div>
      </div>
    </div>
  );

  const SEOPane = (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Meta title</label>
        <Input placeholder="Title shown in Google results" className="h-11" />
      </div>
      <div>
        <label className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Meta description</label>
        <Textarea
          value={metaDesc}
          onChange={(e) => setMetaDesc(e.target.value.slice(0, 160))}
          rows={3}
          placeholder="A compelling 1-2 sentence summary for search engines."
        />
        <div className="mt-1 text-right text-[11px] text-muted-foreground">{metaDesc.length}/160</div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Canonical URL</label>
        <Input placeholder="https://adtune.in/blog/your-post" className="h-11" />
      </div>

      {/* Google preview card */}
      <div className="surface-card p-5">
        <div className="text-xs tracking-caps text-muted-foreground">Google preview</div>
        <div className="mt-4">
          <div className="text-xs text-muted-foreground">adtune.in › blog › {slug || "your-post"}</div>
          <div className="mt-1 text-xl text-primary-glow">{title || "Your post title appears here"}</div>
          <div className="mt-1 text-sm text-muted-foreground">{metaDesc || "Your meta description appears here. Aim for 150–160 characters that clearly describe the article and include your main keyword."}</div>
        </div>
      </div>
    </div>
  );

  const SettingsPane = (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Category</label>
        <select className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm">
          <option>SEO</option>
          <option>Performance</option>
          <option>Social</option>
          <option>Web</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Tags</label>
        <div className="flex flex-wrap items-center gap-2 rounded-md border border-input bg-background p-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs">
              {t}
              <button onClick={() => setTags(tags.filter((x) => x !== t))} className="text-muted-foreground hover:text-foreground"><X className="h-3 w-3" /></button>
            </span>
          ))}
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={addTag}
            placeholder="Add tag…"
            className="min-w-[120px] flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Publish date</label>
        <Input type="datetime-local" className="h-11" />
      </div>
    </div>
  );

  const panes: Record<Tab, JSX.Element> = { Content: ContentPane, Media: MediaPane, SEO: SEOPane, Settings: SettingsPane };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <Link to="/admin/blogs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All blogs
        </Link>
        <div className="flex items-center gap-2">
          <span className={`hidden rounded-full border px-2.5 py-1 text-[10px] tracking-caps md:inline-block ${
            status === "Published" ? "border-success/30 bg-success/10 text-success" : "border-warning/30 bg-warning/10 text-warning"
          }`}>{status}</span>
          <Button variant="subtle" onClick={() => save(false)} className="hidden md:inline-flex"><Save className="h-4 w-4" /> Save draft</Button>
          <Button variant="hero" onClick={() => save(true)}><Send className="h-4 w-4" /> Publish</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto rounded-full border border-border bg-surface p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs tracking-caps transition-colors ${
                  tab === t ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="surface-card p-5 md:p-7">{panes[tab]}</div>
        </div>

        {/* Desktop sidebar — always visible */}
        <aside className="hidden space-y-4 lg:block">
          <div className="surface-card p-5">
            <div className="text-xs tracking-caps text-muted-foreground">Status</div>
            <div className="mt-3 flex gap-2">
              {(["Draft", "Published"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs tracking-caps transition-colors ${
                    status === s ? "border-primary bg-accent text-foreground" : "border-border bg-surface text-muted-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="surface-card p-5">
            <div className="text-xs tracking-caps text-muted-foreground">Quick info</div>
            <dl className="mt-3 space-y-2.5 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Word count</dt><dd className="font-mono">0</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Read time</dt><dd className="font-mono">0 min</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Last saved</dt><dd className="text-muted-foreground">—</dd></div>
            </dl>
          </div>
        </aside>
      </div>

      {/* Mobile sticky publish bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <Button variant="subtle" size="lg" onClick={() => save(false)} className="flex-1"><Save className="h-4 w-4" /> Save</Button>
        <Button variant="hero" size="lg" onClick={() => save(true)} className="flex-1"><Send className="h-4 w-4" /> Publish</Button>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
