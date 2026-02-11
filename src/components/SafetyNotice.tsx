import { AlertTriangle } from "lucide-react";

interface SafetyNoticeProps {
  productId?: string;
}

const SafetyNotice = ({ productId }: SafetyNoticeProps) => {
  return (
    <div className="bg-caution-light border border-caution/30 rounded-xl p-4 md:p-5">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-caution/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-caution-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-caution-foreground">Usage Advisory</h4>
          <ul className="text-sm text-caution-foreground/90 space-y-1.5">
            {productId === "eyebrows" ? (
              <li>• <strong>Lash Application:</strong> Apply along the lash line only — avoid direct contact with eyes.</li>
            ) : (
              <li>• <strong>Patch Test Required:</strong> Always perform a patch test 24 hours before first use.</li>
            )}
            <li>• <strong>External Use Only:</strong> Keep away from eyes and mucous membranes.</li>
            <li>• <strong>Allergies:</strong> Discontinue use if irritation, redness, or allergic reaction occurs.</li>
            <li>• <strong>Storage:</strong> Store in a cool, dry place away from direct sunlight.</li>
            <li>• <strong>Children:</strong> Keep out of reach of children.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SafetyNotice;
