import { Link } from "react-router-dom";
import { FileText, Eye, Edit3, PlusCircle, TrendingUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total posts", value: "24", delta: "+3 this month", icon: FileText },
  { label: "Published", value: "18", delta: "75% live", icon: Eye },
  { label: "Drafts", value: "6", delta: "Awaiting review", icon: Edit3 },
  { label: "Views (30d)", value: "12.4K", delta: "+18%", icon: TrendingUp },
];

const recent = [
  { title: "7 SEO strategies that actually work for Hyderabad businesses in 2026", status: "Published", date: "Apr 12", views: "2.1K" },
  { title: "How much should a small business actually spend on Google Ads?", status: "Published", date: "Apr 4", views: "1.6K" },
  { title: "Instagram content that converts: a framework for D2C brands", status: "Draft", date: "Mar 28", views: "—" },
  { title: "The local SEO checklist for service businesses", status: "Published", date: "Mar 20", views: "980" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="surface-card p-5">
            <div className="flex items-start justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary-glow">
                <s.icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] tracking-caps text-muted-foreground">{s.delta}</span>
            </div>
            <div className="mt-5 font-mono text-3xl font-medium">{s.value}</div>
            <div className="mt-1 text-xs tracking-caps text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="surface-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border p-5">
            <div>
              <div className="text-xs tracking-caps text-muted-foreground">Recent activity</div>
              <h2 className="mt-1 font-display text-lg font-medium">Latest posts</h2>
            </div>
            <Link to="/admin/blogs" className="text-sm text-primary-glow hover:text-foreground">View all →</Link>
          </div>
          <ul className="divide-y divide-border">
            {recent.map((r, i) => (
              <li key={i} className="flex items-center justify-between gap-4 p-5 hover:bg-accent/20 transition-colors">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{r.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.date} · {r.views} views</div>
                </div>
                <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] tracking-caps ${
                  r.status === "Published"
                    ? "border-success/30 bg-success/10 text-success"
                    : "border-warning/30 bg-warning/10 text-warning"
                }`}>
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card p-6">
          <div className="text-xs tracking-caps text-muted-foreground">Quick actions</div>
          <h2 className="mt-1 font-display text-lg font-medium">Get going</h2>
          <div className="mt-5 space-y-2.5">
            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/admin/blogs/new"><PlusCircle className="h-4 w-4" /> New blog post</Link>
            </Button>
            <Button asChild variant="subtle" size="lg" className="w-full">
              <Link to="/admin/blogs">Manage all posts</Link>
            </Button>
            <Button asChild variant="subtle" size="lg" className="w-full">
              <Link to="/admin/media">Media library</Link>
            </Button>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-surface-elevated p-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground">
              <ArrowUpRight className="h-4 w-4 text-primary-glow" /> Tip
            </div>
            <p className="mt-1.5 leading-relaxed">Posts with a featured image and a 150-character meta description get 2× more clicks from search.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
