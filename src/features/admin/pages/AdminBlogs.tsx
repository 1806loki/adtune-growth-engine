import { Link } from "react-router-dom";
import { useState } from "react";
import { PlusCircle, Search, MoreHorizontal, Edit3, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const posts = [
  { id: "1", title: "7 SEO strategies that actually work for Hyderabad businesses in 2026", category: "SEO", status: "Published", date: "Apr 12, 2026", views: "2,134" },
  { id: "2", title: "How much should a small business actually spend on Google Ads?", category: "Performance", status: "Published", date: "Apr 4, 2026", views: "1,602" },
  { id: "3", title: "Instagram content that converts: a framework for D2C brands", category: "Social", status: "Draft", date: "Mar 28, 2026", views: "—" },
  { id: "4", title: "The local SEO checklist for service businesses", category: "SEO", status: "Published", date: "Mar 20, 2026", views: "980" },
  { id: "5", title: "Meta ads creative principles that still work in 2026", category: "Performance", status: "Scheduled", date: "Apr 25, 2026", views: "—" },
  { id: "6", title: "Shopify vs. custom build: how to choose for your D2C brand", category: "Web", status: "Draft", date: "Mar 6, 2026", views: "—" },
];

const filters = ["All", "Published", "Draft", "Scheduled"];

const statusStyles: Record<string, string> = {
  Published: "border-success/30 bg-success/10 text-success",
  Draft: "border-warning/30 bg-warning/10 text-warning",
  Scheduled: "border-primary/40 bg-primary/15 text-primary-glow",
};

const AdminBlogs = () => {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");

  const filtered = posts.filter((p) => (filter === "All" || p.status === filter) && p.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 md:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search posts…" className="h-11 pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden gap-1 rounded-full border border-border bg-surface p-1 md:flex">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-xs tracking-caps transition-colors ${
                  filter === f ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <Button asChild variant="hero">
            <Link to="/admin/blogs/new"><PlusCircle className="h-4 w-4" /> New post</Link>
          </Button>
        </div>
      </div>

      {/* Mobile filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 md:hidden">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs tracking-caps transition-colors ${
              filter === f ? "border-primary bg-accent text-foreground" : "border-border bg-surface text-muted-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Desktop table */}
      <div className="surface-card hidden overflow-hidden md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-[10px] tracking-caps text-muted-foreground">
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Views</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-accent/20 transition-colors">
                <td className="max-w-md px-5 py-4">
                  <Link to={`/admin/blogs/edit/${p.id}`} className="block truncate font-medium hover:text-primary-glow">{p.title}</Link>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{p.category}</td>
                <td className="px-5 py-4">
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] tracking-caps ${statusStyles[p.status]}`}>{p.status}</span>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{p.date}</td>
                <td className="px-5 py-4 font-mono text-muted-foreground">{p.views}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <Link to={`/admin/blogs/edit/${p.id}`} className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"><Edit3 className="h-4 w-4" /></Link>
                    <button className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"><Eye className="h-4 w-4" /></button>
                    <button className="rounded-md p-2 text-muted-foreground hover:bg-destructive/20 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {filtered.map((p) => (
          <div key={p.id} className="surface-card p-4">
            <div className="flex items-start justify-between gap-3">
              <Link to={`/admin/blogs/edit/${p.id}`} className="flex-1 text-sm font-medium leading-snug">{p.title}</Link>
              <button className="shrink-0 rounded-md p-1.5 text-muted-foreground"><MoreHorizontal className="h-4 w-4" /></button>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className={`rounded-full border px-2 py-0.5 text-[10px] tracking-caps ${statusStyles[p.status]}`}>{p.status}</span>
              <span className="text-[11px] text-muted-foreground">{p.category} · {p.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogs;
